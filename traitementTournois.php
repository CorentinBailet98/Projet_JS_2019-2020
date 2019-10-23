<?php
session_start();

$_SESSION["listePseudo"] = [];

for($i=0; $i<$_SESSION["nbrJoueurs"];$i++){
    if(isset($_GET["pseudoJ".($i+1)])){
        $_SESSION["listePseudo"][$i] = $_GET["pseudoJ".($i+1)];
        //echo  $_SESSION["listePseudo"][$i][0]."->".$_SESSION["listePseudo"][$i][1]. " ";
    }
}

$_SESSION["listeVictoireDefaite"] = [];

if($_SESSION["nbrJoueurs"] == 3){
    $_SESSION["ordreMatchs"] = [
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][1]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][2]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][2]]];

}
else if($_SESSION["nbrJoueurs"] == 4){
    $_SESSION["ordreMatchs"] = [
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][1]],
        [$_SESSION["listePseudo"][2],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][2]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][2]]];

}
if($_SESSION["nbrJoueurs"] == 5){
    $_SESSION["ordreMatchs"] = [
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][1]],
        [$_SESSION["listePseudo"][2],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][3],$_SESSION["listePseudo"][4]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][4]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][2],$_SESSION["listePseudo"][4]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][3]],
        [$_SESSION["listePseudo"][1],$_SESSION["listePseudo"][4]],
        [$_SESSION["listePseudo"][0],$_SESSION["listePseudo"][2]]];

}

header('Location: gestionTournoi.php');

?>