<?php

class Oeuvre extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		$this->load->model('Oeuvres_model');
	}

	public function findAll()
	{
		$allOeuvres = $this->Oeuvres_model->getAll();
		echo json_encode($allOeuvres);
	}

	public function findById($id){

		$oeuvre = $this->Oeuvres_model->getByID($id);
		return json_encode($oeuvre);

	}

	public function findByArtiste($id){

		$oeuvre = $this->Oeuvres_model->getByArtiste($id);
		echo json_encode($oeuvre);

	}

	public function findByMouvement($id){

		$oeuvre = $this->Oeuvres_model->getByMouvement($id);
		echo json_encode($oeuvre);

	}

	public function new(){
		$title = $this->input->post('title');
		$date = $this->input->post('date');
		$img = $this->input->post('img');
		$id_mouvement = $this->input->post('id_mouvement');
		$id_artiste = $this->input->post('id_artiste');
		$anecdote = $this->input->post('anecdote');
		$data = $this->Oeuvres_model->addNewOeuvre($title, $date, $img, $id_mouvement, $id_artiste, $anecdote);
		if($data == true){
			echo json_encode('Oeuvre créer');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function edit($id){
		$title = $this->input->post('title');
		$date = $this->input->post('date');
		$img = $this->input->post('img');
		$id_mouvement = $this->input->post('id_mouvement');
		$id_artiste = $this->input->post('id_artiste');
		$anecdote = $this->input->post('anecdote');
		$data = $this->Oeuvres_model->editOeuvre($id, $title, $date, $img, $id_mouvement, $id_artiste, $anecdote);
		if($data == true){
			echo json_encode('Oeuvre modifié');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function delete($id){
		$data = $this->Oeuvres_model->deleteOeuvres($id);
		echo json_encode($data);
		if($data == true){
			echo json_encode('Oeuvre supprimé');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

}
?>
