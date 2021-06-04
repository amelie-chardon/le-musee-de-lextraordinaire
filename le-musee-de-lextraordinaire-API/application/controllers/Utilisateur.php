<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Utilisateur extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	 public function __construct()
    {
        parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET");
        $this->load->model('Utilisateur_model');
		$this->load->library('Authorization_Token');
    }
	 
	public function getUser(){

		$is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id=$user_data->{"id"}; //On récupère l'id de l'utilisateur connecté
			$data=$this->Utilisateur_model->getUser($id);

			$result=json_encode($data);
			echo $result;
		}
		else{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Id user not valid"
			];
			$result=json_encode($message);
			echo $result;
		}
	}
	public function getAll(){
		
		$data=$this->Utilisateur_model->getAll();

			$result=json_encode($data);
			echo $result;
	}

	public function deleteUser(){

		$is_valid_token = $this->authorization_token->validateToken();
		if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id=$user_data->{"id"}; //On récupère l'id de l'utilisateur connecté
			$data=$this->Utilisateur_model->deleteUser($id);

			$result=json_encode($data);
			echo $result;
		}
		else
		{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Id user not valid"
			];
			$result=json_encode($message);
			echo $result;
		}		
	}

	public function addUser(){
		 
        //Vérification du formulaire
		$this->load->library('form_validation');

        $this->form_validation->set_rules('identifiant', 'identifiant', 'trim|required|is_unique[utilisateurs.identifiant]|alpha_numeric|max_length[20]',
            array('is_unique' => 'This %s already exists please enter another username')
        );
        $this->form_validation->set_rules('email', 'email', 'trim|required|valid_email|is_unique[utilisateurs.email]|max_length[80]',
            array('is_unique' => 'This %s already exists please enter another email address')
        );
        $this->form_validation->set_rules('mdp', 'mdp', 'trim|required|max_length[100]');
        if ($this->form_validation->run() == FALSE)
        {
            // Erreurs formulaires
            $message = array(
                'status' => false,
                'error' => $this->form_validation->error_array(),
                'message' => validation_errors()
            );
			$result=json_encode($message);
			echo $result;
        }
        else
        {
            
				$identifiant=$this->input->post('identifiant');
				$email=$this->input->post('email');
				$mdp=$this->input->post('mdp');
           
            //Ajout utilisateur dans bdd
			$output=$this->Utilisateur_model->addUser($identifiant, $email, $mdp);
            if ($output == true)
            {
                // Success
                $message = [
                    'status' => true,
                    'message' => "User registration successful"
                ];
				$result=json_encode($message);
				echo $result;
            } else
            {
                // Erreur
                $message = [
                    'status' => FALSE,
                    'message' => "Not Register Your Account."
                ];
				$result=json_encode($message);
				echo $result;
            }
        }
	}

	public function updateUser(){

		$is_valid_token = $this->authorization_token->validateToken();
		if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id=$user_data->{"id"}; //On récupère l'id de l'utilisateur connecté
				
			//On récupère les infos du formulaire
			$identifiant=$this->input->post('identifiant');
			$email=$this->input->post('email');
			$mdp=$this->input->post('mdp');

			//On vérifie que le mot de passe est correct
			$this->db->select('mdp');
			$query = $this->db->get_where('utilisateurs', array('email'=> $email));		
			$result=$query->result();
			$mdp_hash=$result[0]->mdp;
			if(password_verify($mdp,$mdp_hash))
			{
				$data=$this->Utilisateur_model->updateUser($id, $identifiant, $email, $mdp);
						 
				$message = [
					'status' => true,
					'data' => [$identifiant,$email],
					'message' => "User data modified"
				];
					$result=json_encode($message);
					echo $result;
			}
			else 
			{
				$message = [
				'status' => FALSE,
				'message' => "Password not valid"
				];
				$result=json_encode($message);
				echo $result;
			}		
		} 
		else
		{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Id data not modified"
			];
			$result=json_encode($message);
			echo $result;
		}
	}

	public function updatePassword(){

		$is_valid_token = $this->authorization_token->validateToken();
		if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id=$user_data->{"id"}; //On récupère l'id de l'utilisateur connecté
				
			//On récupère les infos du formulaire
			$old_pwd=$this->input->post('old_pwd');
			$new_pwd=$this->input->post('new_pwd');
			$new_pwd_confirm=$this->input->post('new_pwd_confirm');

			//On vérifie que les 2 nouveaux mdp sont identiques
			if($new_pwd==$new_pwd_confirm)
			{
				//On vérifie que l'ancien mot de passe est correct
				$this->db->select('mdp');
				$query = $this->db->get_where('utilisateurs', array('id'=> $id));		
				$result=$query->result();
				$mdp_hash=$result[0]->mdp;
				if(password_verify($old_pwd,$mdp_hash))
				{
					$data=$this->Utilisateur_model->updatePassword($id, $new_pwd);
						 
					$message = [
						'status' => true,
						'message' => "Password modified"
					];
						$result=json_encode($message);
						echo $result;
				}
				else 
				{
					$message = [
					'status' => FALSE,
					'message' => "Old password not valid"
					];
					$result=json_encode($message);
					echo $result;
				}		
			} 
			else
			{
				//error

				$message = [
					'status' => FALSE,
					'message' => "The new password does not match password confirmation"
				];
				$result=json_encode($message);
				echo $result;
			}
		}
	}

	public function connectUser(){

		// Validation formulaire
		$this->load->library('form_validation');
		$this->form_validation->set_rules('email', 'email', 'trim|required|valid_email|max_length[80]');
        $this->form_validation->set_rules('mdp', 'mdp', 'trim|required|max_length[100]');
        if ($this->form_validation->run() == FALSE)
        {
            // Erreur formulaire
            $message = array(
                'status' => false,
                'error' => $this->form_validation->error_array(),
                'message' => validation_errors()
            );

            $result=json_encode($message);
			echo $result;
        }
        else
        {
            //Login
			$email=$this->input->post('email');
			$mdp=$this->input->post('mdp');
            $output = $this->Utilisateur_model->connectUser($email, $mdp);
            if (!empty($output) AND $output != FALSE)
            {
                // Load Authorization Token Library
                $this->load->library('Authorization_Token');

                // Generate Token
                $token_data['id'] = $output->id;
                $token_data['identifiant'] = $output->identifiant;
                $token_data['email'] = $output->email;
                $token_data['time'] = time();

                $user_token = $this->authorization_token->generateToken($token_data);

                $return_data = [
                    'id' => $output->id,
                    'identifiant' => $output->identifiant,
                    'email' => $output->email,
                    'token' => $user_token,
                ];

                // Login Success
                $message = [
                    'status' => true,
                    'data' => $return_data,
                    'message' => "User login successful"
                ];
            $result=json_encode($message);
			echo $result;
            } 
			else
            {
                // Login Error
                $message = [
                    'status' => FALSE,
                    'message' => "Invalid Username or Password"
                ];
            $result=json_encode($message);
			echo $result;
            }
        }		
	}
}
