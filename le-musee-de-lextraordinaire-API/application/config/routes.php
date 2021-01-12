<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

//Routes par défaut
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//Oeuvres 
$route['oeuvres']['GET'] = 'Oeuvre/findAll';
$route['oeuvres/(:num)']['GET'] = 'oeuvre/findById/$1';
$route['oeuvres/new'] = 'Oeuvre/new';
$route['oeuvres/artiste/(:num)']['GET'] = 'oeuvre/findByArtiste/$1';
$route['oeuvres/mouvement/(:num)']['GET'] = 'oeuvre/findByMouvement/$1';

//Favoris
$route['favoris']['POST'] = 'favoris/newFavoris';
$route['favoris/(:num)']['GET'] = 'favoris/getFavoris/$1';
$route['favoris/(:num)']['DELETE'] = 'favoris/deleteFavoris/$1'; //id_oeuvre


//Utilisateurs

$route['utilisateur']['GET'] = 'Utilisateur/getUser';
$route['utilisateur']['DELETE'] = 'Utilisateur/deleteUser';
$route['utilisateur']['POST'] = 'Utilisateur/addUser';
$route['utilisateur/updateData']['POST'] = 'Utilisateur/updateUser';
$route['utilisateur/updatePassword']['POST'] = 'Utilisateur/updatePassword';
$route['utilisateur/connexion']['POST'] = 'Utilisateur/connectUser';


//Artistes
$route['artiste/byname/(:any)']['GET'] = 'Artiste/getArtisteByName/$1';
$route['artiste']['GET'] = 'Artiste/findAll';
$route['artiste/(:num)']['GET'] = 'Artiste/getArtisteById/$1';

?>
