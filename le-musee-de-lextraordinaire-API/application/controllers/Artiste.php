<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Artiste extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
    public function __construct() 
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        $this->load->model('Artiste_Model');
	}

	public function findAll()
	{
		$allArtiste = $this->Artiste_Model->getAll();
		echo json_encode($allArtiste);
	}
	public function getArtisteByName($nom)
	{
		$data = $this->Artiste_Model->getArtisteByNameModel($nom);
		echo json_encode($data);
	}

	public function getArtisteById ($id)
	{
		$data = $this->Artiste_Model->getArtisteByIdModel($id);
		echo json_encode($data);
	}

	public function new(){
		$name = $this->input->post('name');
		$img = $this->input->post('img');
		$bio = $this->input->post('bio');
		$id_mouvement = $this->input->post('id_mouvement');
		$data = $this->Artiste_Model->addNewArtist($name, $img, $bio, $id_mouvement);
		if($data == true){
			echo json_encode('Artiste créer');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function edit($id){
		$name = $this->input->post('name');
		$img = $this->input->post('img');
		$bio = $this->input->post('bio');
		$id_mouvement = $this->input->post('id_mouvement');
		$data = $this->Artiste_Model->editArtist($id, $name, $img, $bio, $id_mouvement);
		if($data == true){
			echo json_encode('Artiste modifié');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}

	public function delete($id){
		$data = $this->Artiste_Model->deleteArtist($id);
		echo json_encode($data);
		if($data == true){
			echo json_encode('Artiste supprimé');
		} else {
			echo json_encode('Une erreur est apparue');
		}
	}
    
}
