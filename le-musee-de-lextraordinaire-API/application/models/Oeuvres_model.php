<?php

class Oeuvres_model extends CI_Model
{

	public $titre;
	public $date;
	public $image;
	public $id_mouvement;
	public $id_image;
	public $anecdote;

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function getAll()
	{
		$this->db->select('oeuvres.titre, oeuvres.date, oeuvres.img, oeuvres.anecdote, mouvements.nom as mouvement, artistes.nom as artiste');
		$this->db->from('oeuvres');
		$this->db->join('mouvements', 'mouvements.id = oeuvres.id_mouvement');
		$this->db->join('artistes', 'artistes.id = oeuvres.id_artiste');
		$query = $this->db->get();
		return $query->result();
	}

	public function getById($id){
		$this->db->select('oeuvres.titre, oeuvres.date, oeuvres.img, oeuvres.anecdote, mouvements.nom as mouvement, artistes.nom as artiste');
		$this->db->from('oeuvres');
		$this->db->join('mouvements', 'mouvements.id = oeuvres.id_mouvement');
		$this->db->join('artistes', 'artistes.id = oeuvres.id_artiste');
		$this->db->where('oeuvres.id', $id);
		$query = $this->db->get();
		return $query->result();
	}

	public function getByArtiste($id){
		$this->db->select('oeuvres.titre, oeuvres.date, oeuvres.img, oeuvres.anecdote, mouvements.nom as mouvement, artistes.nom as artiste');
		$this->db->from('oeuvres');
		$this->db->join('mouvements', 'mouvements.id = oeuvres.id_mouvement');
		$this->db->join('artistes', 'artistes.id = oeuvres.id_artiste');
		$this->db->where('oeuvres.id_artiste', $id);
		$query = $this->db->get();
		return $query->result();
	}

	public function getByMouvement($id){
		$this->db->select('oeuvres.titre, oeuvres.date, oeuvres.img, oeuvres.anecdote, mouvements.nom as mouvement, artistes.nom as artiste');
		$this->db->from('oeuvres');
		$this->db->join('artistes', 'artistes.id = oeuvres.id_artiste');
		$this->db->join('mouvements', 'mouvements.id = oeuvres.id_mouvement');
		$this->db->where('oeuvres.id_mouvement', $id);
		$query = $this->db->get();
		return $query->result();
	}

	public function addNewOeuvre($title, $date, $img, $id_mouvement, $id_artiste, $anecdote){
		$data = array(
			'titre' => $title,
			'date' => $date,
			'img' => $img,
			'id_mouvement' => $id_mouvement,
			'id_artiste' => $id_artiste,
			'anecdote' => $anecdote
		);
		$this->db->insert('oeuvres', $data);
		return true;
	}

	public function editOeuvre($id, $title, $date, $img, $id_mouvement, $id_artiste, $anecdote){
		$data = array(
			'titre' => $title,
			'date' => $date,
			'img' => $img,
			'id_mouvement' => $id_mouvement,
			'id_artiste' => $id_artiste,
			'anecdote' => $anecdote
		);
		$this->db->where('id', $id);
		$this->db->update('oeuvres', $data);
		return true;
	}

	public function deleteOeuvres($id){

		$this->db->where('id', $id);
		$this->db->delete('oeuvres');
		return true;
	}
}
