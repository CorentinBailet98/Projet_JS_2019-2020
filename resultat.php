<?php
session_start();
$_SESSION["listePseudo"];
$Joueur_nbrVic = [];
for($i=0; $i < sizeof($_SESSION["listePseudo"]); $i++){
    $nbrVictoirJ = 0;
    for($j=0; $j < sizeof($_SESSION["ordreMatchs"]); $j++){
        if($_SESSION["ordreMatchs"][$j][0] == $_SESSION["listePseudo"][$i]){
            $nbrVictoirJ += $_SESSION["listeVictoireDefaite"][$j][0];
        }
        else if($_SESSION["ordreMatchs"][$j][1] == $_SESSION["listePseudo"][$i]){
            $nbrVictoirJ += $_SESSION["listeVictoireDefaite"][$j][1];
        }
        else{
            $nbrVictoirJ += 0;
        }
    }
    array_push($Joueur_nbrVic,$nbrVictoirJ);

}

for($a=0; $a < sizeof($Joueur_nbrVic); $a++){
    echo $Joueur_nbrVic[$a]."---";
}

$position1er = -1;
$position2eme = -1;
$position3eme = -1;
$position1erEgalite = [];
$position2emeEgalite = [];
$position3emeEgalite = [];
for($a=0; $a < sizeof($Joueur_nbrVic); $a++){
    //echo $Joueur_nbrVic[$a]."---";
    if($a == 0){
        $position1er = $a;
    }
    else if($a == 1){
        if($Joueur_nbrVic[$position1er] < $Joueur_nbrVic[$a]){
            $position2eme = $position1er;
            $position1er = $a;
        }
        else if($Joueur_nbrVic[$position1er] > $Joueur_nbrVic[$a]){
            $position2eme = $a;
        }
    }
    else if($a == 2){
        if($Joueur_nbrVic[$position1er] < $Joueur_nbrVic[$a]){
            $position3eme = $position2eme;
            $position2eme = $position1er;
            $position1er = $a;
        }
        else if($Joueur_nbrVic[$position1er] > $Joueur_nbrVic[$a] and $Joueur_nbrVic[$position2eme] < $Joueur_nbrVic[$a]){
            $position3eme = $position2eme;
            $position2eme = $a;
        }
        else if($Joueur_nbrVic[$position2eme] > $Joueur_nbrVic[$a]){
            $position3eme = $a;
        }
    }
    else if($a >= 3){
        if($Joueur_nbrVic[$position1er] < $Joueur_nbrVic[$a]){
            $position3eme = $position2eme;
            $position2eme = $position1er;
            $position1er = $a;
        }
        else if($Joueur_nbrVic[$position1er] > $Joueur_nbrVic[$a] and $Joueur_nbrVic[$position2eme] < $Joueur_nbrVic[$a]){
            $position3eme = $position2eme;
            $position2eme = $a;
        }
        else if($Joueur_nbrVic[$position2eme] > $Joueur_nbrVic[$a] and $Joueur_nbrVic[$position3eme] < $Joueur_nbrVic[$a]){
            $position3eme = $a;
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="../css/index.css">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>

  <body>
    <h1 id="titre">Wrestling Game</h1>
    <div id="resultats">
        <?php
            echo "<h3>1er : ".$_SESSION['listePseudo'][$position1er]."</h3><br>";
            echo "<h3>2ème : ".$_SESSION['listePseudo'][$position2eme]."</h3><br>";
            echo "<h3>3ème : ".$_SESSION['listePseudo'][$position3eme]."</h3><br>";
        ?>

    </div>
  </body>
</html>