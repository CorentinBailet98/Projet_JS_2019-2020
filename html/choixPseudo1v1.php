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
            <form method="get" action="pageJeu.html">
                <p>
                    <label for="pseudo">Pseudo joueur 1</label> : <input type="text" name="pseudoJ1" id="pseudo" />
                </p>
                <p>
                    <label for="pseudo">Pseudo joueur 2</label> : <input type="text" name="pseudoJ2" id="pseudo" />
                    <input type="checkbox" name="JouIA" id="JouIA" /> <label for="JouIA">IA/bot</label><br />
                </p>
                <p id="boutonEnvoie"><input type="submit" value="Jouer" /></p>
            </form>

    </div>
  </body>
</html>