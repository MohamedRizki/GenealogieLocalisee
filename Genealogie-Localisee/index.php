<?php

require 'flight/Flight.php';
// Route pour la page d'accueil
Flight::route('/', function() {
    Flight::render('page_de_garde');  
});

Flight::start();

?>