<?php
session_start();
$_SESSION["nbrJoueurs"];
$_SESSION["numMatchActuel"];
$_SESSION["ordreMatchs"];


if(isset($_GET["addNumMatch"])){
    if($_GET["addNumMatch"] = 1){
        $_SESSION["numMatchActuel"]++;
        if($_SESSION["numMatchActuel"] + 1 > sizeof($_SESSION['ordreMatchs'])){
            header('Location: resultat.php');
        }
    }
}
if(isset($_GET["defaiteP1"]) and isset($_GET["defaiteP2"])){
    if($_GET["defaiteP1"] == 0){
        array_push($_SESSION["listeVictoireDefaite"], [1,0]);
    }
    else if($_GET["defaiteP1"] == 1){
        array_push($_SESSION["listeVictoireDefaite"], [0,1]);
    }
    
}


$_SESSION["matchCourant"] = $_SESSION["ordreMatchs"][$_SESSION["numMatchActuel"]];
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
    <div id="tournoi">
        <p>Le match <?php echo $_SESSION["numMatchActuel"] + 1;?> va commencer !</p><br>
        <p>Il oppose <?php  echo $_SESSION['ordreMatchs'][$_SESSION['numMatchActuel']][0].' contre '.$_SESSION['ordreMatchs'][$_SESSION['numMatchActuel']][1];?>.</p>
        <a href="pageJeu.php?pseudoJ1=<?php echo $_SESSION['ordreMatchs'][$_SESSION['numMatchActuel']][0];?>&pseudoJ2=<?php echo $_SESSION['ordreMatchs'][$_SESSION['numMatchActuel']][1];?>"><button>C'est partit</button></a>

    </div>
  </body>
</html>
