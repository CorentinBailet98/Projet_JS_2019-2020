window.onload = init;
//-------------Paramètre modifiable de départ----------------//
if(findPseudo("pseudoJ3")){
  var pseudoJoueur = [findPseudo("pseudoJ1"),findPseudo("pseudoJ2"),findPseudo("pseudoJ3")];
  var nbrJoureur = 3;
}
else{
  var pseudoJoueur = [findPseudo("pseudoJ1"),findPseudo("pseudoJ2")];
  var nbrJoureur = 2;
}

var boostDepartP1 = 0;
var boostDepartP2 = 0;
var tempsAcceleration = 30;
var chrono = 3600*3;
var miliSec = 60;

//---------------------Variables-----------------------------//
let players = [];
let id = null;
let accP1 = false;
let accP2 = false;
let compteurTest = 0;
let switchPlayer = false;
let stoneAttack1 = false;
let stoneAttack2 = false;
let restart = false;
let retourTournoi = false;
let therIsBoost = false;
let boostX = false;
let boostY = false;
let parametreIA = [];
//nombre de vie des joueurs
let scorePointP1 = 3;
let scorePointP2 = 3;
//nombre de match gagné
let scorePartiesP1 = 0;
let scorePartiesP2 = 0;
//compteurs
let cmp = 0;
let cmpAcc1 = 0;
let cmpAcc2 = 0;
let cmpAcc3 = 0;
//let jeuOn = true;
let coordCx = 1000;
let coordCy = 1000;
let boostRecolter = false;
//Pour le gamepad :
var gamepad;
var buttonStatusDiv;


//--------------------------------------------------------------//

//repositionne les joueurs au centre
function initPlyers(){
  players[0].x = 250;
  players[0].y = 275;
  players[1].x = 325;
  players[1].y = 275;
  players[0].dx = 0;
  players[0].dy = 0;
  players[1].dx = 0;
  players[1].dy = 0;
  players[0].acc = false;
  players[1].acc = false;  
  cmpAcc1 = 0;
  cmpAcc2 = 0;
  cmpAcc3 = 0;
  if(nbrJoureur == 3){
    players[2].x = 385;
    players[2].y = 225;
    players[2].dx = 0;
    players[2].dy = 0;
    players[2].acc = false;

  }
}



//Fonction permettant d'annimé le programme
//en s'exécutant 60 fois par seconde
function anime60fps(){
  if(chrono >= 0){
    chrono--;
  }
  players.map(p => {
    p.checkPoint();
  });
  //console.log(chrono);
  //Si jeuOn = false alors on ne fait plus rien
  if ((players[0].scorePlayer>0 && players[1].scorePlayer>0) && (chrono > 0 && miliSec >= -1)){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRing();
    drawCircles();
    drawSponso();
    
    miliSec--;
    if(miliSec == 0){
      miliSec = 60;
    }
    drawChrono(chrono,miliSec);
    
    //s'adresse au joueur un par un pour appliquer
    //les méthodes .move(), .draw() et .checkOut()
    players.map(p => {
      //ON VERIFIE QUE C'EST PAS UNE IA
      if(p.IA == false){
        p.move();
      }
      else{
        p.moveIA();
      }
      p.draw();
      if(p.checkOut()){
        //jeuOn = false;
        p.scorePlayer -= 1;
        initPlyers();
        console.log(p.numberPlayer)
      }
      p.tuchBoost();
    });

    //POUR LE GAMEPAD
    // clear, draw objects, etc...
    scangamepads();
    // Check gamepad button states
    checkButtons(gamepad);
    // Check les axes
    chekAxes(gamepad)
    
    //affiche le score (vie restante) des joueurs
    if (nbrJoureur == 2){
      drawNbrMatchWin(scorePartiesP1,scorePartiesP2);
      scoreBoard();
      //affiche le nombre de boosts accumulé
      lvlBoost(players[0],100);
      lvlBoost(players[1],425);
    }
    
    if(nbrJoureur == 3){
      //affiche le nombre de boosts accumulé
      scoreBoard3J();
      lvlBoost(players[0],50);
      lvlBoost(players[1],250);
      lvlBoost(players[2],450);
    }
    
    colPlayer(0,1);
    if(nbrJoureur == 3){
      colPlayer(2,1);
      colPlayer(2,0);
    }

    //dans la fonction getKeyAndMove() si j'appuie sur "n"
    //le premier joueur a son attribut accélération sur true
    //la variable recul0 passe a 10 ainsi le joueur 0
    //projettera plus loin son adversaire
    if(players[0].acc){
      recul0 = 10;
      if(cmpAcc1 > tempsAcceleration){
        recul0 = 1;
        players[0].acc = false;
        cmpAcc1 = 0;
      }
      //compteur pour limité le temps de boost
      cmpAcc1++;
    }
    if(players[1].acc){
      recul1 = 10;
      if(cmpAcc2 > tempsAcceleration){
        recul1 = 1;
        players[1].acc = false;
        cmpAcc2 = 0;
      }
      cmpAcc2++;
    }
    if(nbrJoureur == 3){
      if(players[2].acc){
        recul1 = 10;
        if(cmpAcc3 > tempsAcceleration){
          recul1 = 1;
          players[1].acc = false;
          cmpAcc3 = 0;
        }
        cmpAcc3++;
      }
    }
    
    //compteur pour faire apparaitre un boost
    if(cmp > 450){
        let cx = 125 + getRandomInt(300);
        let cy = 125 + getRandomInt(300);
        coordCx = cx;
        coordCy = cy;
        if(boostRecolter){
          boostRecolter = false;
        }
        cmp = 0;
    }
    cmp++;
    if (boostRecolter == false){
      //il y a un boost et therIsBoost = true sinon = false
      therIsBoost = spawnRandomCircle(coordCx,coordCy);
    }
    
  }
  else {
      restart = true;
      //joueur 2 gagne
      if(players[0].scorePlayer == 0){
        draWinner(1,1);
      }
      //joueur 1 gagne
      else if(players[1].scorePlayer == 0){
        draWinner(0,0);
      }
      else if(players[2].scorePlayer == 0){
        draWinner(2,2);
      }
      else if(players[0].nbrBoostRecolter < players[1].nbrBoostRecolter){
        draWinner(1,1);
      }
      else if(players[1].nbrBoostRecolter < players[0].nbrBoostRecolter){
        draWinner(0,0);
      }
      else if(players[1].nbrBoostRecolter < players[2].nbrBoostRecolter){
        draWinner(2,2);
      }
      else if(players[2].nbrBoostRecolter < players[1].nbrBoostRecolter){
        draWinner(1,1);
      }
      else if(players[2].nbrBoostRecolter < players[0].nbrBoostRecolter){
        draWinner(0,0);
      }
      else if(players[0].nbrBoostRecolter < players[2].nbrBoostRecolter){
        draWinner(2,2);
      }
      else{
        //console.log("égalité");
      }
    }
  requestAnimationFrame(anime60fps);
}

//Je sais pas comment ça fonctionne mdrrr
function cancelAnimation() {
    cancelAnimationFrame(id);
}

//Fonction init qui donne le contexte, crée 2 joueurs et fait appel
// à la fonction anime60fps()
function init() {
  canvas = document.querySelector('#Canvas');
  ctx = canvas.getContext("2d");
  //créer 2 joueurs
  players.push(new joueur(250, 275, colorJ1Maillot, colorJ1Hair, colorJ1Body, accP1, ctx, boostDepartP1, 1, scorePointP1,0,false,0));
  if(findPseudo("JouIA")){
    players.push(new joueur(325, 275, colorJ1Maillot, colorJ1Hair, colorJ1Body, accP2, ctx, boostDepartP2, 2, scorePointP2,0,true,0));
  }
  else{
    players.push(new joueur(325, 275, colorJ2Maillot, colorJ2Hair, colorJ2Body, accP2, ctx, boostDepartP2, 2, scorePointP2,0,false,0));

  if(findPseudo("pseudoJ3")){
    players.push(new joueur(385, 225, "green", "brown", accP2, ctx, boostDepartP2, 3, scorePointP2,0,true,0));
  }
}
  
  requestAnimationFrame(anime60fps);
  
}


