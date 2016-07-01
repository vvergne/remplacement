<?php

require 'vendor/autoload.php';

$app = new Slim\App();

$app->get('/', function ($request, $response, $args) {
 $response->write("Welcome: This is AlphansoTech Tutorial Guide");
 return $response;
});

$app->get('/friends', function ($request, $response, $args) {
 $response->write("Hello Friends!");
 return $response;
});
$app->run();

?>
