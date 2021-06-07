<?php

class Mouvement extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		$this->load->model('Mouvement_model');
	}

	public function findAll()
	{
		$allMouvements = $this->Mouvement_model->getAll();
		echo json_encode($allMouvements);
	}

	public function findById($id){

		$mouvement = $this->Mouvement_model->getByID($id);
		echo json_encode($mouvement);

	}

	public function new(){
		$nom = $this->input->post('nom');
		$data = $this->Mouvement_model->addNewMouvement($nom);
		if($data == true){
			echo json_encode('Mouvement créer');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function edit($id){
		$nom = $this->input->post('nom');
		$data = $this->Mouvement_model->editMouvement($id, $nom);
		if($data == true){
			echo json_encode('Mouvement modifié');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function delete($id){
		$data = $this->Mouvement_model->deleteMouvement($id);
		echo json_encode($data);
		if($data == true){
			echo json_encode('Mouvement supprimé');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

}
?>
