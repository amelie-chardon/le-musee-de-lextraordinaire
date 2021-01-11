<?php

class Oeuvre extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
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

}
?>
