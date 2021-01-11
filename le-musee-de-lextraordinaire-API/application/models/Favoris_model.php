<?php


class Favoris_model extends CI_Model
{

	public $id_utilisateur;
	public $id_oeuvre;


	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function createFavoris($input, $id)
	{
		$id_oeuvre = $input['id_oeuvre'];
		$id_user = $id;
		$data = array(
			'id_oeuvre' => $id_oeuvre,
			'id_utilisateur' => $id_user,
		);
		$this->db->insert('favoris', $data);

		return true;
	}


	public function deleteFavoris($id_oeuvre, $id_utilisateur)
	{
		$this->db->delete('favoris', array('id_oeuvre' => $id_oeuvre, 'id_utilisateur' => $id_utilisateur));
		return true;
	}

	public function getAll($id)
	{

		$this->db->select('favoris.id_oeuvre, oeuvres.titre, oeuvres.date, oeuvres.img, oeuvres.anecdote, mouvements.nom as mouvement, artistes.nom as artiste');
		$this->db->from('favoris');
		$this->db->join('oeuvres', 'oeuvres.id = favoris.id_oeuvre');
		$this->db->join('artistes', 'artistes.id = oeuvres.id_artiste');
		$this->db->join('mouvements', 'mouvements.id = oeuvres.id_mouvement');
		$this->db->where('id_utilisateur', $id);
		$query = $this->db->get();
		$result = $query->result();
		return($result);
	}
}
