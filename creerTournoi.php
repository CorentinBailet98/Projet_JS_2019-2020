<?php
session_start();
$_SESSION["inTournament"] = true;
$_SESSION["nbrJoueurs"] = 3;
$_SESSION["numMatchActuel"] = 0;

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
        <caption>Tournois</caption>
            <form method="get" action="creerTournoi.php">
                <select name="nbrJ">Nombre de participants :
                    <option >3 joueurs</option>
                    <option>4 joueurs</option>
                    <option>5 joueurs</option>
                    <option>6 joueurs</option>
                    <option>8 joueurs</option>
                </select>
                <p id="nombreJoueurs"><input type="submit" value="confirmer" /></p>
            </form>
            <form method="get" action="traitementTournois.php">
                <p>
                    <label for="pseudo">Pseudo joueur 1</label> : <input type="text" name="pseudoJ1" id="pseudo" />
                </p>
                <p>
                    <label for="pseudo">Pseudo joueur 2</label> : <input type="text" name="pseudoJ2" id="pseudo" />
                </p>
                <p>
                    <label for="pseudo">Pseudo joueur 3</label> : <input type="text" name="pseudoJ3" id="pseudo" />
                </p>
                <?php
                      if(isset($_GET["nbrJ"])){
                      $nbrJ = $_GET["nbrJ"];
                      if($nbrJ == "4 joueurs"){
                        echo '
                        <p>
                        <label for="pseudo">Pseudo joueur 4</label> : <input type="text" name="pseudoJ4" id="pseudo" />
                        </p>';
                        $_SESSION["nbrJoueurs"] = 4;
                        $_SESSION["ordreMatchs"] = [["pseudoJ1","pseudoJ2"],["pseudoJ3","pseudoJ4"],
                                                    ["pseudoJ1","pseudoJ3"],["pseudoJ2","pseudoJ4"],
                                                    ["pseudoJ1","pseudoJ4"],["pseudoJ2","pseudoJ3"]];
                        }
                        else if($nbrJ == "5 joueurs"){
                          echo '
                          <p>
                            <label for="pseudo">Pseudo joueur 4</label> : <input type="text" name="pseudoJ4" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 5</label> : <input type="text" name="pseudoJ5" id="pseudo" />
                          </p>';
                          $_SESSION["nbrJoueurs"] = 5;
                          $_SESSION["ordreMatchs"] = [["pseudoJ1","pseudoJ2"],["pseudoJ3","pseudoJ4"],
                                                      ["pseudoJ2","pseudoJ3"],["pseudoJ4","pseudoJ5"],
                                                      ["pseudoJ1","pseudoJ5"],["pseudoJ2","pseudoJ4"],
                                                      ["pseudoJ3","pseudoJ5"],["pseudoJ1","pseudoJ4"],
                                                      ["pseudoJ2","pseudoJ5"],["pseudoJ1","pseudoJ3"]];
                        }
                        else if($nbrJ == "6 joueurs"){
                          echo '
                          <p>
                            <label for="pseudo">Pseudo joueur 4</label> : <input type="text" name="pseudoJ4" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 5</label> : <input type="text" name="pseudoJ5" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 6</label> : <input type="text" name="pseudoJ6" id="pseudo" />
                          </p>';
                          $_SESSION["nbrJoueurs"] = 6;
                          $_SESSION["ordreMatchs"] = [["pseudoJ1","pseudoJ2"],["pseudoJ3","pseudoJ0"],
                                                      ["pseudoJ4","pseudoJ0"],["pseudoJ5","pseudoJ6"]];
                        }
                        else if($nbrJ == "8 joueurs"){
                          echo '
                          <p>
                            <label for="pseudo">Pseudo joueur 4</label> : <input type="text" name="pseudoJ4" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 5</label> : <input type="text" name="pseudoJ5" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 6</label> : <input type="text" name="pseudoJ6" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 7</label> : <input type="text" name="pseudoJ7" id="pseudo" />
                          </p>
                          <p>
                            <label for="pseudo">Pseudo joueur 8</label> : <input type="text" name="pseudoJ8" id="pseudo" />
                          </p>';
                          $_SESSION["nbrJoueurs"] = 8;
                          $_SESSION["ordreMatchs"] = [["pseudoJ1","pseudoJ2"],["pseudoJ3","pseudoJ4"],
                                                      ["pseudoJ5","pseudoJ6"],["pseudoJ7","pseudoJ8"]];
                        }
                    }
                    
                ?>
                
                
                <p id="boutonEnvoie"><input type="submit" value="Jouer" /></p>
            </form>

    </div>
  </body>
</html>