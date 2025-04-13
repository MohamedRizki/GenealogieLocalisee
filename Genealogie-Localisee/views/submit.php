<?php
// Ce script PHP est destiné à traiter et stocker les données soumises via le formulaire de généalogie.
// Il établit une connexion à la base de données 'genealogie' et insère les données recueillies dans la table 'utilisateurs'.
// Les données du formulaire sont nettoyées et validées à l'aide de 'filter_input' pour prévenir les injections SQL et autres failles de sécurité.
// Auteurs : Marie GRARD et Mohamed RIZKI

// Contenu de dbconnect.php
$host = 'localhost';
$db = 'genealogie';
$user = 'root';
$pass = 'root';
$dsn = "mysql:host=$host;dbname=$db";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    echo "Une erreur interne s'est produite. Veuillez réessayer plus tard.";
}
// Collecte et nettoyage des données du formulaire
$nom_complet = filter_input(INPUT_POST, 'nom_complet', FILTER_SANITIZE_STRING);
$prenom_user = filter_input(INPUT_POST, 'prenom_user', FILTER_SANITIZE_STRING);
$prenom_pere = filter_input(INPUT_POST, 'prenom_pere', FILTER_SANITIZE_STRING);
$nom_complet_pere = filter_input(INPUT_POST, 'nom_complet_pere', FILTER_SANITIZE_STRING);
$date_de_naissance = filter_input(INPUT_POST, 'date_de_naissance', FILTER_SANITIZE_STRING);
$date_de_naissance_Pere = filter_input(INPUT_POST, 'date_de_naissance_Pere', FILTER_SANITIZE_STRING);
$genre = filter_input(INPUT_POST, 'genre', FILTER_SANITIZE_STRING);
$adresse_actuelle = filter_input(INPUT_POST, 'adresse_actuelle', FILTER_SANITIZE_STRING);
$lieu_de_naissance = filter_input(INPUT_POST, 'lieu_de_naissance', FILTER_SANITIZE_STRING);
$lieu_naissance_pere = filter_input(INPUT_POST, 'lieu_naissance_pere', FILTER_SANITIZE_STRING);
$nombre_freres_soeurs = filter_input(INPUT_POST, 'nombre_freres_soeurs', FILTER_SANITIZE_STRING);
$nombre_demi_freres_soeurs = filter_input(INPUT_POST, 'nombre_demi_freres_soeurs', FILTER_SANITIZE_STRING);
$profession_actuelle = filter_input(INPUT_POST, 'profession_actuelle', FILTER_SANITIZE_STRING);
$structure_famille = filter_input(INPUT_POST, 'structure_famille', FILTER_SANITIZE_STRING);
$raisons_lieux_marquants = filter_input(INPUT_POST, 'raisons_lieux_marquants', FILTER_SANITIZE_STRING);
$trajectoire_sociale = filter_input(INPUT_POST, 'trajectoire_sociale', FILTER_SANITIZE_STRING);
$date_deces_pere = filter_input(INPUT_POST, 'date_deces_pere', FILTER_SANITIZE_STRING);
$lieu_residence_pere = filter_input(INPUT_POST, 'lieu_residence_pere', FILTER_SANITIZE_STRING);
$profession_pere = filter_input(INPUT_POST, 'profession_pere', FILTER_SANITIZE_STRING);
$structure_familiale_pere = filter_input(INPUT_POST, 'structure_familiale_pere', FILTER_SANITIZE_STRING);
$lieux_significatifs_pere = filter_input(INPUT_POST, 'lieux_significatifs_pere', FILTER_SANITIZE_STRING);
$trajectoire_sociale_pere = filter_input(INPUT_POST, 'trajectoire_sociale_pere', FILTER_SANITIZE_STRING);
$inegalite_sociale_pere = filter_input(INPUT_POST, 'inegalite_sociale_pere', FILTER_SANITIZE_STRING);
$nom_complet_mere = filter_input(INPUT_POST, 'nom_complet_mere', FILTER_SANITIZE_STRING);
$date_de_naissance_Mere = filter_input(INPUT_POST, 'date_de_naissance_Mere', FILTER_SANITIZE_STRING);
$lieu_naissance_Mere = filter_input(INPUT_POST, 'lieu_naissance_Mere', FILTER_SANITIZE_STRING);
$date_deces_mere = filter_input(INPUT_POST, 'date_deces_mere', FILTER_SANITIZE_STRING);
$adresse_mere = filter_input(INPUT_POST, 'adresse_mere', FILTER_SANITIZE_STRING);
$profession_mere = filter_input(INPUT_POST, 'profession_mere', FILTER_SANITIZE_STRING);
$structure_familiale_mere = filter_input(INPUT_POST, 'structure_familiale_mere', FILTER_SANITIZE_STRING);
$lieux_significatifs_mere = filter_input(INPUT_POST, 'lieux_significatifs_mere', FILTER_SANITIZE_STRING);
$trajectoire_sociale_mere = filter_input(INPUT_POST, 'trajectoire_sociale_mere', FILTER_SANITIZE_STRING);
$inegalite_sociale_mere = filter_input(INPUT_POST, 'inegalite_sociale_mere', FILTER_SANITIZE_STRING);
$nom_grand_pere_paternel = filter_input(INPUT_POST, 'nom_grand_pere_paternel', FILTER_SANITIZE_STRING);;
$date_naissance_grpp = filter_input(INPUT_POST, 'date_naissance_grpp', FILTER_SANITIZE_STRING);
$lieu_naissance_grpp = filter_input(INPUT_POST, 'lieu_naissance_grpp', FILTER_SANITIZE_STRING);
$date_deces_grpp = filter_input(INPUT_POST, 'date_deces_grpp', FILTER_SANITIZE_STRING);
$adresse_grand_pere_paternel = filter_input(INPUT_POST, 'adresse_grand_pere_paternel', FILTER_SANITIZE_STRING);
$profession_grand_pere_paternel = filter_input(INPUT_POST, 'profession_grand_pere_paternel', FILTER_SANITIZE_STRING);
$structure_familiale_grpp = filter_input(INPUT_POST, 'structure_familiale_grpp', FILTER_SANITIZE_STRING);
$lieux_importants_grpp = filter_input(INPUT_POST, 'lieux_importants_grpp', FILTER_SANITIZE_STRING);
$nom_grand_mere_paternel = filter_input(INPUT_POST, 'nom_grand_mere_paternel', FILTER_SANITIZE_STRING);
$date_naissance_grmp = filter_input(INPUT_POST, 'date_naissance_grmp', FILTER_SANITIZE_STRING);
$lieu_naissance_grmp = filter_input(INPUT_POST, 'lieu_naissance_grmp', FILTER_SANITIZE_STRING);
$date_deces_grmp = filter_input(INPUT_POST, 'date_deces_grmp', FILTER_SANITIZE_STRING);
$adresse_grand_mere_paternel = filter_input(INPUT_POST, 'adresse_grand_mere_paternel', FILTER_SANITIZE_STRING);
$profession_grand_mere_paternel = filter_input(INPUT_POST, 'profession_grand_mere_paternel', FILTER_SANITIZE_STRING);
$structure_familiale_grmp = filter_input(INPUT_POST, 'structure_familiale_grmp', FILTER_SANITIZE_STRING);
$lieux_importants_grmp = filter_input(INPUT_POST, 'lieux_importants_grmp', FILTER_SANITIZE_STRING);
$nom_grand_pere_maternelle = filter_input(INPUT_POST, 'nom_grand_pere_maternelle', FILTER_SANITIZE_STRING);
$date_naissance_grpm = filter_input(INPUT_POST, 'date_naissance_grpm', FILTER_SANITIZE_STRING);
$lieu_naissance_grpm = filter_input(INPUT_POST, 'lieu_naissance_grpm', FILTER_SANITIZE_STRING);
$date_deces_grpm = filter_input(INPUT_POST, 'date_deces_grpm', FILTER_SANITIZE_STRING);
$adresse_grand_pere_maternelle = filter_input(INPUT_POST, 'adresse_grand_pere_maternelle', FILTER_SANITIZE_STRING);
$profession_grand_pere_maternelle = filter_input(INPUT_POST, 'profession_grand_pere_maternelle', FILTER_SANITIZE_STRING);
$structure_familiale_grpm = filter_input(INPUT_POST, 'structure_familiale_grpm', FILTER_SANITIZE_STRING);
$lieux_importants_grpm = filter_input(INPUT_POST, 'lieux_importants_grpm', FILTER_SANITIZE_STRING);
$nom_grand_mere_maternelle = filter_input(INPUT_POST, 'nom_grand_mere_maternelle', FILTER_SANITIZE_STRING);
$date_naissance_grmm = filter_input(INPUT_POST, 'date_naissance_grmm', FILTER_SANITIZE_STRING);
$lieu_naissance_grmm = filter_input(INPUT_POST, 'lieu_naissance_grmm', FILTER_SANITIZE_STRING);
$date_deces_grmm = filter_input(INPUT_POST, 'date_deces_grmm', FILTER_SANITIZE_STRING);
$adresse_grand_mere_maternelle = filter_input(INPUT_POST, 'adresse_grand_mere_maternelle', FILTER_SANITIZE_STRING);
$profession_grand_mere_maternelle = filter_input(INPUT_POST, 'profession_grand_mere_maternelle', FILTER_SANITIZE_STRING);
$structure_familiale_grmm = filter_input(INPUT_POST, 'structure_familiale_grmm', FILTER_SANITIZE_STRING);
$lieux_importants_grmm = filter_input(INPUT_POST, 'lieux_importants_grmm', FILTER_SANITIZE_STRING);
$prenom_mere = filter_input(INPUT_POST, 'prenom_mere', FILTER_SANITIZE_STRING);
$prenom_grand_pere_paternel = filter_input(INPUT_POST, 'prenom_grand_pere_paternel', FILTER_SANITIZE_STRING);
$prenom_grand_mere_paternel = filter_input(INPUT_POST, 'prenom_grand_mere_paternel', FILTER_SANITIZE_STRING);
$prenom_grand_pere_maternel = filter_input(INPUT_POST, 'prenom_grand_pere_maternel', FILTER_SANITIZE_STRING);
$prenom_grand_mere_maternelle = filter_input(INPUT_POST, 'prenom_grand_mere_maternelle', FILTER_SANITIZE_STRING);
$nbr_frsoeur_pere = filter_input(INPUT_POST, 'nbr_frsoeur_pere', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_pere = filter_input(INPUT_POST, 'nbr_demi_frsoeur_pere', FILTER_SANITIZE_STRING);
$nbr_frsoeur_mere = filter_input(INPUT_POST, 'nbr_frsoeur_mere', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_mere = filter_input(INPUT_POST, 'nbr_demi_frsoeur_mere', FILTER_SANITIZE_STRING);
$nbr_frsoeur_grpp = filter_input(INPUT_POST, 'nbr_frsoeur_grpp', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_grpp = filter_input(INPUT_POST, 'nbr_demi_frsoeur_grpp', FILTER_SANITIZE_STRING);
$nbr_frsoeur_grmp = filter_input(INPUT_POST, 'nbr_frsoeur_grmp', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_grpm = filter_input(INPUT_POST, 'nbr_demi_frsoeur_grpm', FILTER_SANITIZE_STRING);
$nbr_frsoeur_grpm = filter_input(INPUT_POST, 'nbr_frsoeur_grpm', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_grmp = filter_input(INPUT_POST, 'nbr_demi_frsoeur_grmp', FILTER_SANITIZE_STRING);
$nbr_frsoeur_grmm = filter_input(INPUT_POST, 'nbr_frsoeur_grmm', FILTER_SANITIZE_STRING);
$nbr_demi_frsoeur_grmm = filter_input(INPUT_POST, 'nbr_demi_frsoeur_grmm', FILTER_SANITIZE_STRING);
$niveau_richesse_grpp = filter_input(INPUT_POST, 'niveau_richesse_grpp', FILTER_SANITIZE_STRING);
$niveau_richesse_grmp = filter_input(INPUT_POST, 'niveau_richesse_grmp', FILTER_SANITIZE_STRING);
$niveau_richesse_grpm = filter_input(INPUT_POST, 'niveau_richesse_grpm', FILTER_SANITIZE_STRING);
$niveau_richesse_grmm = filter_input(INPUT_POST, 'niveau_richesse_grmm', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_pere = filter_input(INPUT_POST, 'zoom_carte_naissance_pere', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_pere = filter_input(INPUT_POST, 'zoom_carte_adresse_pere', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_mere = filter_input(INPUT_POST, 'zoom_carte_naissance_mere', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_mere = filter_input(INPUT_POST, 'zoom_carte_adresse_mere', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_grpp = filter_input(INPUT_POST, 'zoom_carte_naissance_grpp', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_grpp = filter_input(INPUT_POST, 'zoom_carte_adresse_grpp', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_grmp = filter_input(INPUT_POST, 'zoom_carte_naissance_grmp', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_grmp = filter_input(INPUT_POST, 'zoom_carte_adresse_grmp', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_grpm = filter_input(INPUT_POST, 'zoom_carte_naissance_grpm', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_grpm = filter_input(INPUT_POST, 'zoom_carte_adresse_grpm', FILTER_SANITIZE_STRING);
$zoom_carte_naissance_grmm = filter_input(INPUT_POST, 'zoom_carte_naissance_grmm', FILTER_SANITIZE_STRING);
$zoom_carte_adresse_grmm = filter_input(INPUT_POST, 'zoom_carte_adresse_grmm', FILTER_SANITIZE_STRING);
// Préparation et exécution de la requête
$stmt = $pdo->prepare('INSERT INTO utilisateurs (nom_complet, date_de_naissance, genre, adresse_actuelle, lieu_de_naissance, nombre_freres_soeurs, nombre_demi_freres_soeurs, profession_actuelle, structure_famille, raisons_lieux_marquants, trajectoire_sociale, nom_complet_pere, date_de_naissance_Pere, lieu_naissance_pere, date_deces_pere, lieu_residence_pere, profession_pere, structure_familiale_pere, lieux_significatifs_pere, trajectoire_sociale_pere, inegalite_sociale_pere, nom_complet_mere, date_de_naissance_Mere, lieu_naissance_Mere, date_deces_mere, adresse_mere, profession_mere, structure_familiale_mere, lieux_significatifs_mere, trajectoire_sociale_mere, inegalite_sociale_mere, nom_grand_pere_paternel, date_naissance_grpp, lieu_naissance_grpp, date_deces_grpp, adresse_grand_pere_paternel, profession_grand_pere_paternel, structure_familiale_grpp, lieux_importants_grpp, nom_grand_mere_paternel, date_naissance_grmp, lieu_naissance_grmp, date_deces_grmp, adresse_grand_mere_paternel, profession_grand_mere_paternel, structure_familiale_grmp, lieux_importants_grmp, nom_grand_pere_maternelle, date_naissance_grpm, lieu_naissance_grpm, date_deces_grpm, adresse_grand_pere_maternelle, profession_grand_pere_maternelle, structure_familiale_grpm, lieux_importants_grpm, nom_grand_mere_maternelle, date_naissance_grmm, lieu_naissance_grmm, date_deces_grmm, adresse_grand_mere_maternelle, profession_grand_mere_maternelle, structure_familiale_grmm, lieux_importants_grmm, prenom_user, prenom_pere, prenom_mere, prenom_grand_pere_paternel, prenom_grand_mere_paternel, prenom_grand_pere_maternel, prenom_grand_mere_maternelle, nbr_frsoeur_pere, nbr_demi_frsoeur_pere, nbr_frsoeur_mere, nbr_demi_frsoeur_mere, nbr_frsoeur_grpp, nbr_demi_frsoeur_grpp, nbr_frsoeur_grmp, nbr_demi_frsoeur_grpm, nbr_frsoeur_grpm, nbr_demi_frsoeur_grmp, nbr_frsoeur_grmm, nbr_demi_frsoeur_grmm, niveau_richesse_grpp, niveau_richesse_grmp, niveau_richesse_grpm, niveau_richesse_grmm, zoom_carte_naissance_pere, zoom_carte_adresse_pere, zoom_carte_naissance_mere, zoom_carte_adresse_mere, zoom_carte_naissance_grpp, zoom_carte_adresse_grpp, zoom_carte_naissance_grmp, zoom_carte_adresse_grmp, zoom_carte_naissance_grpm, zoom_carte_adresse_grpm, zoom_carte_naissance_grmm, zoom_carte_adresse_grmm) VALUES (:nom_complet, :date_de_naissance, :genre, :adresse_actuelle, :lieu_de_naissance, :nombre_freres_soeurs, :nombre_demi_freres_soeurs, :profession_actuelle, :structure_famille, :raisons_lieux_marquants, :trajectoire_sociale, :nom_complet_pere, :date_de_naissance_Pere, :lieu_naissance_pere, :date_deces_pere, :lieu_residence_pere, :profession_pere, :structure_familiale_pere, :lieux_significatifs_pere, :trajectoire_sociale_pere, :inegalite_sociale_pere, :nom_complet_mere, :date_de_naissance_Mere, :lieu_naissance_Mere, :date_deces_mere, :adresse_mere, :profession_mere, :structure_familiale_mere, :lieux_significatifs_mere, :trajectoire_sociale_mere, :inegalite_sociale_mere, :nom_grand_pere_paternel, :date_naissance_grpp, :lieu_naissance_grpp, :date_deces_grpp, :adresse_grand_pere_paternel, :profession_grand_pere_paternel, :structure_familiale_grpp, :lieux_importants_grpp, :nom_grand_mere_paternel, :date_naissance_grmp, :lieu_naissance_grmp, :date_deces_grmp, :adresse_grand_mere_paternel, :profession_grand_mere_paternel, :structure_familiale_grmp, :lieux_importants_grmp, :nom_grand_pere_maternelle, :date_naissance_grpm, :lieu_naissance_grpm, :date_deces_grpm, :adresse_grand_pere_maternelle, :profession_grand_pere_maternelle, :structure_familiale_grpm, :lieux_importants_grpm, :nom_grand_mere_maternelle, :date_naissance_grmm, :lieu_naissance_grmm, :date_deces_grmm, :adresse_grand_mere_maternelle, :profession_grand_mere_maternelle, :structure_familiale_grmm, :lieux_importants_grmm, :prenom_user, :prenom_pere, :prenom_mere, :prenom_grand_pere_paternel, :prenom_grand_mere_paternel, :prenom_grand_pere_maternel, :prenom_grand_mere_maternelle, :nbr_frsoeur_pere, :nbr_demi_frsoeur_pere, :nbr_frsoeur_mere, :nbr_demi_frsoeur_mere, :nbr_frsoeur_grpp, :nbr_demi_frsoeur_grpp, :nbr_frsoeur_grmp, :nbr_demi_frsoeur_grpm, :nbr_frsoeur_grpm, :nbr_demi_frsoeur_grmp, :nbr_frsoeur_grmm, :nbr_demi_frsoeur_grmm, :niveau_richesse_grpp, :niveau_richesse_grmp, :niveau_richesse_grpm, :niveau_richesse_grmm, :zoom_carte_naissance_pere, :zoom_carte_adresse_pere, :zoom_carte_naissance_mere, :zoom_carte_adresse_mere, :zoom_carte_naissance_grpp, :zoom_carte_adresse_grpp, :zoom_carte_naissance_grmp, :zoom_carte_adresse_grmp, :zoom_carte_naissance_grpm, :zoom_carte_adresse_grpm, :zoom_carte_naissance_grmm, :zoom_carte_adresse_grmm)');
$success = $stmt->execute([
    ':nom_complet' => $nom_complet,
    ':date_de_naissance' => $date_de_naissance,
    ':genre' => $genre,
    ':adresse_actuelle' => $adresse_actuelle,
    ':lieu_de_naissance' => $lieu_de_naissance,
    ':nombre_freres_soeurs' => $nombre_freres_soeurs,
    ':nombre_demi_freres_soeurs' => $nombre_demi_freres_soeurs,
    ':profession_actuelle' => $profession_actuelle,
    ':structure_famille'=> $structure_famille,
    ':raisons_lieux_marquants'=> $raisons_lieux_marquants,
    ':trajectoire_sociale'=> $trajectoire_sociale,
    ':nom_complet_pere'=> $nom_complet_pere,
    ':date_de_naissance_Pere'=> $date_de_naissance_Pere,
    ':lieu_naissance_pere'=> $lieu_naissance_pere,
    ':date_deces_pere'=> $date_deces_pere,
    ':lieu_residence_pere'=> $lieu_residence_pere,
    ':profession_pere'=> $profession_pere,
    ':structure_familiale_pere'=> $structure_familiale_pere,
    ':nbr_frsoeur_pere'=> $nbr_frsoeur_pere,
    ':lieux_significatifs_pere'=> $lieux_significatifs_pere,
    ':trajectoire_sociale_pere'=> $trajectoire_sociale_pere,
    ':inegalite_sociale_pere'=> $inegalite_sociale_pere,
    ':nom_complet_mere'=> $nom_complet_mere,
    ':date_de_naissance_Mere'=> $date_de_naissance_Mere,
    ':lieu_naissance_Mere'=> $lieu_naissance_Mere,
    ':date_deces_mere'=> $date_deces_mere,
    ':adresse_mere'=> $adresse_mere,
    ':profession_mere'=> $profession_mere,
    ':structure_familiale_mere'=> $structure_familiale_mere,
    ':lieux_significatifs_mere'=> $lieux_significatifs_mere,
    ':trajectoire_sociale_mere'=> $trajectoire_sociale_mere,
    ':inegalite_sociale_mere'=> $inegalite_sociale_mere,
    ':nom_grand_pere_paternel'=> $nom_grand_pere_paternel,
    ':date_naissance_grpp'=> $date_naissance_grpp,
    ':lieu_naissance_grpp'=> $lieu_naissance_grpp,
    ':date_deces_grpp'=> $date_deces_grpp,
    ':adresse_grand_pere_paternel'=> $adresse_grand_pere_paternel,
    ':profession_grand_pere_paternel'=> $profession_grand_pere_paternel,
    ':structure_familiale_grpp'=> $structure_familiale_grpp,
    ':lieux_importants_grpp'=> $lieux_importants_grpp,
    ':nom_grand_mere_paternel'=> $nom_grand_mere_paternel,
    ':date_naissance_grmp'=> $date_naissance_grmp,
    ':lieu_naissance_grmp'=> $lieu_naissance_grmp,
    ':date_deces_grmp'=> $date_deces_grmp,
    ':adresse_grand_mere_paternel'=> $adresse_grand_mere_paternel,
    ':profession_grand_mere_paternel'=> $profession_grand_mere_paternel,
    ':structure_familiale_grmp'=> $structure_familiale_grmp,
    ':lieux_importants_grmp'=> $lieux_importants_grmp,
    ':nom_grand_pere_maternelle'=> $nom_grand_pere_maternelle,
    ':date_naissance_grpm'=> $date_naissance_grpm,
    ':lieu_naissance_grpm'=> $lieu_naissance_grpm,
    ':date_deces_grpm'=> $date_deces_grpm,
    ':adresse_grand_pere_maternelle'=> $adresse_grand_pere_maternelle,
    ':profession_grand_pere_maternelle'=> $profession_grand_pere_maternelle,
    ':structure_familiale_grpm'=> $structure_familiale_grpm,
    ':lieux_importants_grpm'=> $lieux_importants_grpm,
    ':nom_grand_mere_maternelle'=> $nom_grand_mere_maternelle,
    ':date_naissance_grmm'=> $date_naissance_grmm,
    ':lieu_naissance_grmm'=> $lieu_naissance_grmm,
    ':date_deces_grmm'=> $date_deces_grmm,
    ':adresse_grand_mere_maternelle'=> $adresse_grand_mere_maternelle,
    ':profession_grand_mere_maternelle'=> $profession_grand_mere_maternelle,
    ':structure_familiale_grmm'=> $structure_familiale_grmm,
    ':lieux_importants_grmm'=> $lieux_importants_grmm,
    ':prenom_user'=> $prenom_user,
    ':prenom_pere'=> $prenom_pere,
    ':prenom_mere'=> $prenom_mere,
    ':prenom_grand_pere_paternel'=> $prenom_grand_pere_paternel,
    ':prenom_grand_mere_paternel'=> $prenom_grand_mere_paternel,
    ':prenom_grand_pere_maternel'=> $prenom_grand_pere_maternel,
    ':prenom_grand_mere_maternelle'=> $prenom_grand_mere_maternelle,
    ':nbr_demi_frsoeur_pere'=> $nbr_demi_frsoeur_pere,
    ':nbr_frsoeur_mere'=> $nbr_frsoeur_mere,
    ':nbr_demi_frsoeur_mere'=> $nbr_demi_frsoeur_mere,
    ':nbr_frsoeur_grpp'=> $nbr_frsoeur_grpp,
    ':nbr_demi_frsoeur_grpp'=> $nbr_demi_frsoeur_grpp,
    ':nbr_frsoeur_grmp'=> $nbr_frsoeur_grmp,
    ':nbr_demi_frsoeur_grpm'=> $nbr_demi_frsoeur_grpm,
    ':nbr_frsoeur_grpm'=> $nbr_frsoeur_grpm,
    ':nbr_demi_frsoeur_grmp'=> $nbr_demi_frsoeur_grmp,
    ':nbr_frsoeur_grmm'=> $nbr_frsoeur_grmm,
    ':nbr_demi_frsoeur_grmm'=> $nbr_demi_frsoeur_grmm,
    ':niveau_richesse_grpp'=> $niveau_richesse_grpp,
    ':niveau_richesse_grmp'=> $niveau_richesse_grmp,
    ':niveau_richesse_grpm'=> $niveau_richesse_grpm,
    ':niveau_richesse_grmm'=> $niveau_richesse_grmm,
    ':zoom_carte_naissance_pere'=> $zoom_carte_naissance_pere,
    ':zoom_carte_adresse_pere'=> $zoom_carte_adresse_pere,
    ':zoom_carte_naissance_mere'=> $zoom_carte_naissance_mere,
    ':zoom_carte_adresse_mere'=> $zoom_carte_adresse_mere,
    ':zoom_carte_naissance_grpp'=> $zoom_carte_naissance_grpp,
    ':zoom_carte_adresse_grpp'=> $zoom_carte_adresse_grpp,
    ':zoom_carte_naissance_grmp'=> $zoom_carte_naissance_grmp,
    ':zoom_carte_adresse_grmp'=> $zoom_carte_adresse_grmp,
    ':zoom_carte_naissance_grpm'=> $zoom_carte_naissance_grpm,
    ':zoom_carte_adresse_grpm'=> $zoom_carte_adresse_grpm,
    ':zoom_carte_naissance_grmm'=> $zoom_carte_naissance_grmm,
    ':zoom_carte_adresse_grmm'=> $zoom_carte_adresse_grmm,
]);

if ($success) {
    // Les données ont été enregistrées avec succès
    echo "Merci pour votre participation à cette enquête. Vos informations ont été bien prises en compte.";
} else {
    // Une erreur s'est produite lors de l'enregistrement
    echo "Une erreur s'est produite lors de l'enregistrement des informations.";
}
// Redirection vers la page de garde après 2 secondes
header("refresh:2;url=/");
?>