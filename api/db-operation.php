<?php

require 'vendor/autoload.php';
require 'lib/mysql.php';  // on appelle la fonction du framework ainsi que celle de connexion à la DB

$app = new Slim\App();

$app->get('/', 'remplacement');

$app->get('/remplacement/{id}', function($request, $response, $args) {
    get_remplacement_id($args['id']);
});
$app->post('/remplacement_add', function($request, $response, $args) {
    add_remplacement($request->getParsedBody());            // Request object’s <code>getParsedBody()</code> method to parse the HTTP request
});
$app->put('/update_remplacement', function($request, $response, $args) {
    update_remplacement($request->getParsedBody());
});
$app->delete('/delete_remplacement', function($request, $response, $args) {
    delete_remplacement($request->getParsedBody());
});
$app->run();                                                 // lancement de du script

/*
fonction visant à selectionner tout les remplacements

   $sql =  on sélectionne tout les remplacements et on les tri par ID

   $data = // les resultats de la requete sont stockés dans un tablal

   json_encode = on encore la data en JSON
*/
function remplacement() {
    $db = connect_db();
    $sql = "SELECT * FROM remplacement ORDER BY `ID`";
    $exe = $db->query($sql);
    $data = $exe->fetch_all(MYSQLI_ASSOC);
    $db = null;
    echo json_encode($data);
}
/*
 fonction visant à selectionner un remplacement en fonction de son ID
  $sql = nous selectionnons l'offre de remplacement en fonction de l'ID

*/

function get_remplacement_id($ID) {
    $db = connect_db();
    $sql = "SELECT * FROM remplacement WHERE `ID` = '$ID'";
    $exe = $db->query($sql);
    $data = $exe->fetch_all(MYSQLI_ASSOC);
    $db = null;
    echo json_encode($data);
}

/*
 fonction permettant de modifier une offre de remplacement existante
$sql =  modifie le remplacement selectionné en fonction de son ID
 if = Condition pour laquelle , si le dernier_ID n'est pas nul , l'afficher
*/
function update_remplacement($data) {
    $db = connect_db();
    $sql = "update remplacement SET place = '$data[place]',date = '$data[date]',profession='$data[profession]',retrocession = '$data[retrocession]',distance ='$data[distance]',content = '$data[content]'"
            . " WHERE ID = '$data[ID]'";
    $exe = $db->query($sql);
    $last_id = $db->affected_rows;
    $db = null;
    if (!empty($last_id))
        echo $last_id;
    else
        echo false;
}
/*

 fonction visant à ajouter une annonce de remplacement
 $sql = creation d'une nouvelle offre de remplacement


*/

function add_remplacement($data) {
    $db = connect_db();
    $sql = "insert into remplacement (place,date,title,profession,retrocession,distance,content)"." VALUES('$data[place]','$data[date]','$data[title]','$data[profession]','$data[retrocession]','$data[distance]','$data[content]')";
    $exe = $db->query($sql);
    $last_id = $db->insert_id;
    $db = null;
    if (!empty($last_id))
        echo $last_id;
    else
        echo false;
}

/*
fonction de suppression d'une offre existante

$sql = // suppression d'une offre de remplacemen en fonction de son ID
*/

function delete_remplacement($remplacement) {
    $db = connect_db();
    $sql = "DELETE FROM remplacement WHERE ID = '$remplacement[ID]'";
    $exe = $db->query($sql);
    $last_id = $db->insert_id;
    $db = null;
    if (!empty($last_id))
        echo "false";
    else
        echo "true";
}

?>
