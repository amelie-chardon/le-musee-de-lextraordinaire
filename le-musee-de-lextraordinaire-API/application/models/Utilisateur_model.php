<?php 


class Utilisateur_model extends CI_Model {

        private $id;
		private $identifiant;
        private $email;
        private $role;
		private $mdp;

		
		 public function __construct()
		{
			parent::__construct();
			$this->load->database();
		}

		//Récupère les infos d'un utilisateur
        public function getUser($id)
        {
			$this->db->select('id, identifiant, email,role');
			$query = $this->db->get_where('utilisateurs', array('id' => $id));		
			return $query->result();
        }

		//Supprimer un utilisateur
        public function deleteUser($id)
        {
			$query = $this->db->delete('utilisateurs', array('id' => $id));		
			return $query->result();
        }

		//Ajouter un utilisateur
        public function addUser($identifiant, $email, $mdp)
        {
			$mdp_hash=password_hash($mdp, PASSWORD_BCRYPT, ["cost" => 12]);
			$query = $this->db->insert('utilisateurs', array('identifiant' => $identifiant, 'email'=> $email, 'mdp' => $mdp_hash, 'role' => 0));		
			return true;
		}

		//Mettre à jour les données d'un utilisateur
        public function updateUser($id,$identifiant, $email, $mdp)
        {
			$this->db->where('id', $id);
			$query = $this->db->update('utilisateurs', array('identifiant' => $identifiant, 'email'=> $email));		
        }

		//TODO : Ajouter une méthode pour maj mot de passe
		//Mettre à jour le mdp d'un utilisateur
        public function updatePassword($id, $new_mdp)
        {
			$this->db->where('id', $id);
			$mdp_hash=password_hash($new_mdp, PASSWORD_BCRYPT, ["cost" => 12]);
			$query = $this->db->update('utilisateurs', array('mdp' => $mdp_hash));		
        }

		//Connecter un utilisateur
        public function connectUser($email, $mdp)
        {
			$this->db->select('mdp');
			$query = $this->db->get_where('utilisateurs', array('email'=> $email));		
			$result=$query->result();
			$mdp_hash=$result[0]->mdp;
			if(password_verify($mdp,$mdp_hash))
			{
				$q=$this->db->get_where('utilisateurs', array('email'=> $email));
				return $q->row();
			}
			else 
			{
				return false;
			}
		}
}
?>
