<?php

class Favoris extends  CI_Controller{

	public function __construct()
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		$this->load->model('Favoris_model');
		$this->load->library('Authorization_Token');
	}

	//TODO :
	//récupérer id_oeuvre via un post (changer $input en $id_oeuvre)
	//Récupérer id_utilisateur via le décodage du token
	public function newFavoris()
	{
		
		$is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$input = $this->input->post();
			$newFavoris = $this->Favoris_model->createFavoris($input);
			//Récupérer id utilisateur en décodant token (en front)
	
			$message = [
				'status' => true,
				'message' => "Favoris Add"
			];
		echo $message['status'];

		} else{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Favoris Not Add"
			];
		echo $message['status'];
		}

	}

	//TODO
	//récupérer id_fav via un post
	//Récupérer id_utilisateur via le décodage du token
	public function deleteFavoris($id_fav, $id_user)
	{
		$is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			$deleteFavoris = $this->Favoris_model->deleteFavoris($id_fav, $id_user);

			$message = [
				'status' => true,
				'message' => "Favoris deleted"
			];
		echo $message['status'];
		}
		else 
		{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Favoris Not deleted"
			];
		echo $message['status'];
		}
	}

	public function getFavoris($id)
	{
		$allFavoris = $this->Favoris_model->getAll($id);
		echo json_encode($allFavoris);
	}

	/*public function findById($id){

		$oeuvre = $this->Oeuvres_model->getByID($id);
		return json_encode($oeuvre);

	}

	public function findByArtiste($id){

		$oeuvre = $this->Oeuvres_model->getByArtiste($id);
		return json_encode($oeuvre);

	}

	public function findByMouvement($id){

		$oeuvre = $this->Oeuvres_model->getByMouvement($id);
		return json_encode($oeuvre);

	}*/

}
?>
<?php


<?php
use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';
class Favoris extends  CI_Controller{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Favoris_model');
		$this->load->library('Authorization_Token');
	}

	public function newFavoris()
	{

		$is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id = $user_data->{"id"};
			$input = $this->input->post();
			$newFavoris = $this->Favoris_model->createFavoris($input, $id);
			//Récupérer id utilisateur en décodant token (en front)
	
			$message = [
				'status' => true,
				'message' => "Favoris Add"
			];
		$msg = json_encode($message);
		echo $msg;

		} else{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Favoris Not Add"
			];
			$msg = json_encode($message);
			echo $msg;
		}

	}

	public function deleteFavoris($id_fav)
	{
		$is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE)
		{
			//success
			$user_data=$this->authorization_token->userData();
			$id_user = $user_data->{"id"};
			$deleteFavoris = $this->Favoris_model->deleteFavoris($id_fav, $id_user);

			$message = [
				'status' => true,
				'message' => "Favoris deleted"
			];
			$result=json_encode($message);
			echo $result;
		}
		else 
		{
			//error

			$message = [
				'status' => FALSE,
				'message' => "Favoris Not deleted"
			];
			$result=json_encode($message);
			echo $result;
		}

	}

	public function getFavoris($id)
	{
		$allFavoris = $this->Favoris_model->getAll($id);
		echo json_encode($allFavoris);
	}

	/*public function findById($id){
		$oeuvre = $this->Oeuvres_model->getByID($id);
		return json_encode($oeuvre);
	}
	public function findByArtiste($id){
		$oeuvre = $this->Oeuvres_model->getByArtiste($id);
		return json_encode($oeuvre);
	}
	public function findByMouvement($id){
		$oeuvre = $this->Oeuvres_model->getByMouvement($id);
		return json_encode($oeuvre);
	}*/

}
?>
<?php
