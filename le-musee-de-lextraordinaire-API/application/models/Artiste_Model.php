<?php
defined('BASEPATH') OR exit('No direct script access allowed');

    class Artiste_Model extends CI_Model
    {

	public $nom;
	public $img;
	public $biographie;
	public $id_mouvement;
	
        public function __construct()
	{
		parent::__construct();
		$this->load->database();
	} 

	public function index()
	{
		echo json_encode(["Pouet"=>"Artiste Page Model"]);
	}
	   
	public function getAll()
	{
		$this->db->select('artistes.nom as artiste, artistes.img, artistes.biographie, mouvements.nom as mouvement');
		$this->db->from('artistes');
		$this->db->join('mouvements','mouvements.id = artistes.id_mouvement');
		$query = $this->db->get();
		return $query->result();
		
	}

    public function getArtisteByNameModel($nom)
	{
		$nom = urldecode($nom);

		$this->db->select('artistes.nom as artiste, artistes.img, artistes.biographie, mouvements.nom as mouvement');
		$this->db->from('artistes');
		$this->db->join('mouvements','mouvements.id = artistes.id_mouvement');
		$this->db->where('artistes.nom', $nom);
		$query = $this->db->get();
		$result = $query->result();
		
		if(!empty($result)) {
			return $query->result();
		}
		else {
			return "Not found :/";
		}
	}

	 public function getArtisteByIdModel($id)
	{
		$this->db->select('id, nom, img,biographie,id_mouvement');
		$query = $this->db->get_where('artistes', array('id' => $id));		
		$result = $query->result();
		
		if(!empty($result)) {
			return $query->result();
		}
		else {
			return "Not found :/";
		}
	}

	public function addNewArtist($name, $img, $bio, $id_mouvement){
		$data = array(
			'Nom' => $name,
			'img' => $img,
			'biographie' => $bio,
			'id_mouvement' => $id_mouvement
		);
		$this->db->insert('artistes', $data);
		return true;
	}

	public function editArtist($id, $name, $img, $bio, $id_mouvement){
		$data = array(
			'nom' => $name,
			'img' => $img,
			'biographie' => $bio,
			'id_mouvement' => $id_mouvement
		);
		$this->db->where('id', $id);
		$this->db->update('artistes', $data);
		return true;
	}

	public function deleteArtist($id){

		$this->db->where('id', $id);
		$this->db->delete('Artistes');
		return true;
	}


    }

?>
