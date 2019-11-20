<?php
session_start();
$_SESSION["inTournament"] = false;
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
    <div id="formulaire">
            <form method="get" action="pageJeu.php">
                <p>
                    <label for="pseudo">Pseudo joueur 1</label> : <input type="text" name="pseudoJ1" id="pseudo" /><br>
                    <label for="couleurMaillot">Choisis la couleur du maillot </label> <select name="choix0" id="couleurMaillot">
                        <option value="choix10">Rouge</option>
                        <option value="choix20">Orange</option>
                        <option value="choix30">Maron</option>
                        <option value="choix40">Gris</option>
                    </select><br>
                    <label for="couleurPeau">Choisis ta couleur de peau </label> <select name="choix1" id="couleurPeau">
                        <option value="choix11">Trés foncé</option>
                        <option value="choix21">Foncé</option>
                        <option value="choix31" selected>Standard</option>
                        <option value="choix41">Clair</option>
                    </select><br>
                </p>
                <p>
                    <label for="pseudo">Pseudo joueur 2</label> : <input type="text" name="pseudoJ2" id="pseudo" />
                    <input type="checkbox" name="JouIA" id="JouIA" /> <label for="JouIA">IA/bot</label><br />
                    <label for="couleurMaillot2">Choisis la couleur du maillot </label> <select name="choix2" id="couleurMaillot2">
                        <option value="choix12">Bleu</option>
                        <option value="choix22">Vert</option>
                        <option value="choix32">Cyan</option>
                        <option value="choix42">Jaune</option>
                    </select><br>
                    <label for="couleurPeau2">Choisis ta couleur de peau </label> <select name="choix3" id="couleurPeau2">
                        <option value="choix13">Trés foncé</option>
                        <option value="choix23">Foncé</option>
                        <option value="choix33" selected>Standard</option>
                        <option value="choix43">Clair</option>
                    </select><br>
                </p>
                <p id="boutonEnvoie"><input type="submit" value="Jouer" /></p>
            </form>

    </div>
  </body>
</html>