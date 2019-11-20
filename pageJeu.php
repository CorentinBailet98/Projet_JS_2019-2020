<?php
session_start();

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="../css/index.css">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body onkeydown ='getKeyAndMove(event)'>
  <h1 id="titre">Wrestling Game</h1>
  <p class="petit2">Quitter appyez sur "R"</p>
  <canvas id="Canvas" height=600 width="600">
    
  </canvas>
  <script type="text/javascript" src="../js/function.js"></script>
  
  <?php
    if(isset($_GET["choix0"]) && isset($_GET["choix1"]) &&isset($_GET["choix2"]) && isset($_GET["choix3"])){
    
    //Couleur maillot J1
    if($_GET["choix0"] == "choix10"){
      echo '<script type="text/javascript" src="../js/maillot1_1.js"></script><br>';
    }
    else if($_GET["choix0"] == "choix20"){
      echo '<script type="text/javascript" src="../js/maillot1_2.js"></script><br>';
    }
    else if($_GET["choix0"] == "choix30"){
      echo '<script type="text/javascript" src="../js/maillot1_3.js"></script><br>';
    }
    else if($_GET["choix0"] == "choix40"){
      echo '<script type="text/javascript" src="../js/maillot1_4.js"></script><br>';
    }


    //Couleur corps J1
    if($_GET["choix1"] == "choix11"){
      echo '<script type="text/javascript" src="../js/body1_2.js"></script><br>';
    }
    else if($_GET["choix1"] == "choix21"){
      echo '<script type="text/javascript" src="../js/body1_3.js"></script><br>';
    }
    else if($_GET["choix1"] == "choix31"){
      echo '<script type="text/javascript" src="../js/body1_1.js"></script><br>';
    }
    else if($_GET["choix1"] == "choix41"){
      echo '<script type="text/javascript" src="../js/body1_4.js"></script><br>';
    }


    //Couleur maillot J2
    if($_GET["choix2"] == "choix12"){
      echo '<script type="text/javascript" src="../js/maillot2_1.js"></script><br>';
    }
    else if($_GET["choix2"] == "choix22"){
      echo '<script type="text/javascript" src="../js/maillot2_2.js"></script><br>';
    }
    else if($_GET["choix2"] == "choix32"){
      echo '<script type="text/javascript" src="../js/maillot2_3.js"></script><br>';
    }
    else if($_GET["choix2"] == "choix42"){
      echo '<script type="text/javascript" src="../js/maillot2_4.js"></script><br>';
    }


    //Couleur corps J2
    if($_GET["choix3"] == "choix13"){
      echo '<script type="text/javascript" src="../js/body2_2.js"></script><br>';
    }
    else if($_GET["choix3"] == "choix23"){
      echo '<script type="text/javascript" src="../js/body2_3.js"></script><br>';
    }
    else if($_GET["choix3"] == "choix33"){
      echo '<script type="text/javascript" src="../js/body2_1.js"></script><br>';
    }
    else if($_GET["choix3"] == "choix43"){
      echo '<script type="text/javascript" src="../js/body2_4.js"></script><br>';
    }
  }
?>



  <script type="text/javascript" src="../js/joueurIA.js"></script>
  <script type="text/javascript" src="../js/joueur.js"></script>
  <?php 
    if($_SESSION["inTournament"]){
      echo '<script type="text/javascript" src="../js/evenementClavierTournois.js"></script>';
    }
    else{
      echo '<script type="text/javascript" src="../js/evenementClavier.js"></script>';
    }
      ?>
    <script type="text/javascript" src="../js/evenementGamepad.js"></script>
    <script type="text/javascript" src="../js/draw.js"></script>
    <?php 
    if($_SESSION["inTournament"]){
      echo '<script type="text/javascript" src="../js/indexTournoi.js"></script>';
    }
    else{
      echo '<script type="text/javascript" src="../js/index.js"></script>';
    }
    
    //pseudoJ1=Coco     choix=choix20   choix=choix41   
    //pseudoJ2=Kamar    choix=choix32   choix=choix23
  ?>
  
</body>
</html>