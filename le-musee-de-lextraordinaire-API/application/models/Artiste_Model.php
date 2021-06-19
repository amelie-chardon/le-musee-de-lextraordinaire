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
        
    public function GetArtisteModel($nom)
	{
		$this->db->select('nom, img, biographie');
		$this->db->from('artistes');
		$this->db->where('nom', $nom);
		$query = $this->db->get();
		
		return $query->result();
	}


    }

?>