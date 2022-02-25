<?php

try {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}

    catch (Exception $e) {
        die('Erreur : ' .$e->getMessage());
    }

    $reponse = $bdd->query('SELECT UserName FROM Client LIMIT 0, 10');

    echo '<p align="center">Vos collections :</p>';

while ($donnees = $reponse->fetch()) {
    echo $donnees['Name'] . '<br>';
}

$reponse->closeCursor();
    if ($reponse == null) {
        throw new \mysql_xdevapi\Exception();
    }
    else {
        return;
    }
?>