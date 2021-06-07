<?php

class Mouvement_model extends CI_Model
{

	public $nom;

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function getAll()
	{
		$this->db->select('*');
		$this->db->from('mouvements');
		$query = $this->db->get();
		return $query->result();
	}

	public function getById($id){
		$this->db->select('*');
		$this->db->from('mouvements');
		$this->db->where('id', $id);
		$query = $this->db->get();
		return $query->result();
	}


	public function addNewMouvement($nom){
		$data = array(
			'nom' => $nom
		);
		$this->db->insert('mouvements', $data);
		return true;
	}

	public function editMouvement($id, $nom){
		$data = array(
			'nom' => $nom
		);
		$this->db->where('id', $id);
		$this->db->update('mouvements', $data);
		return true;
	}

	public function deleteMouvement($id){

		$this->db->where('id', $id);
		$this->db->delete('mouvements');
		return true;
	}
}
