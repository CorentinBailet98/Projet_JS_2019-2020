//Détection des touches
function getKeyAndMove(e) {				
	var key_code=e.which||e.keyCode;
    var key_press=e.which||e.onkeydown;
    //bouton qui permet de rejouer une foi la partie terminée
    if (restart){
      switch(key_code){
        case 13:
          restart = false;
          compteurTest = 0;
          recul1 = 1;
          recul0 = 1;
          switchPlayer = false;
          stoneAttack1 = false;
          stoneAttack2 = false;
          cmp = 0;
          cmpAcc1 = 0;
          cmpAcc2 = 0;
          boostRecolter = false;
          initPlyers();
          chrono = 3600*3;
          miliSec = 60;
          players.map(p => {
             p.acc = false;
             p.scorePlayer = 3;
             p.nbrBoost = 0
           });
          break;
      }
    }
    
    //si le joueur 1 a accumulé 3 boost il peut activer stoneAttack
    if (players[0].nbrBoost>2){
      switch(key_code){
          case 86: //V key (stoneAttack)
            players[0].nbrBoost -= 3;
            if (stoneAttack1 ){
              stoneAttack1 = false; 
            }
            else {
              stoneAttack1 = true;
              //switchPlayer = false;
            }
            break;
      }
    }
    //si le joueur 2 a accumulé 3 boost il peut activer stoneAttack
  if (players[1].nbrBoost>2){
      switch(key_code){
          case 16: //SHIFT key (stoneAttack)
            players[1].nbrBoost -= 3;
            if (stoneAttack2 ){
              stoneAttack2 = false;
            }
            else {
              stoneAttack2 = true;
              //switchPlayer = false;
            }
            break;
      }
    }
  
  
    //si le joueur 1 a accumulé 2 boost il peut activer le switch
    if (players[0].nbrBoost>1){
      switch(key_code){
          case 66: //B key (switch/souplesse)
            players[0].nbrBoost -= 2;
            if (switchPlayer ){
              switchPlayer = false; 
            }
            else {
              switchPlayer = true;
            }
            break;
      }
    }
    //si le joueur 2 a accumulé 2 boost il peut activer le switch
  if (players[1].nbrBoost>1){
      switch(key_code){
          case 20: //VER MAJ key (switch/souplesse)
            players[1].nbrBoost -= 2;
            if (switchPlayer ){
              switchPlayer = false;
            }
            else {
              switchPlayer = true;
            }
            break;
      }
    }
	switch(key_code){
        case 82:
            RedirectionPage("index.html");
            break;
        //Player 1:
		case 37: //left arrow key
            players[0].deplacement(-1,0);
			break;
		case 38: //Up arrow key
			players[0].deplacement(0,-1);
			break;
		case 39: //right arrow key
			players[0].deplacement(1,0);
			break;
		case 40: //down arrow key
            players[0].deplacement(0,1);
			break;
        //Player 1 stop !
        case 32: //space key
            players[0].deplacement(0,0);
			break;
        case 78: //N key (acceleration P1)
            if (players[0].nbrBoost > 0 ){
               players[0].acc = true;
               players[0].nbrBoost -= 1;
            }
            break;
        
        //Player 2:
        case 81 : //Q key
            players[1].deplacement(-1,0);
            break;
        case 68 || 195: //D key
            players[1].deplacement(1,0);
            break;
        case 90 : //Z key
            players[1].deplacement(0,-1);
            break;
        case 83 : //S key
            players[1].deplacement(0,1);
            break;
        //Player 2 stop !
        case 16: //space key
            players[1].deplacement(0,0);
			break;
        case 226: //< key (acceleration P2)
            if (players[1].nbrBoost > 0 ){
               players[1].acc = true;
               players[1].nbrBoost -= 1;
            }
            break;
        default:
          players[0].deplacement(players[0].dx,players[0].dy);
          players[1].deplacement(players[1].dx,players[1].dy);
	}
}