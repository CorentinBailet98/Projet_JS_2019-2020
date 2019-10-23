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
    ?>
  
</body>
</html>