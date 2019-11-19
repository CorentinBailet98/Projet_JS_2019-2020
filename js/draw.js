//-----------------------PARTIE GRAPHIQUE--------------------//

//Dessine le carré bleu
function drawRing() {
    ctx.save();
    ctx.translate(100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);
    ctx.restore();
    
  }
  
  //Dessine les cercles (rouge>jaune>blanc)
  function drawCircles() {
    ctx.save();
    ctx.translate(300,300);
    //1er Cercle rouge
    ctx.beginPath();
    ctx.arc(0, 0, 175, 0, 2*Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#CB0B04";
    //2eme cercle jaune
    ctx.beginPath();
    ctx.arc(0, 0, 135, 0, 2*Math.PI, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#CB0B04";
    //3eme cercle blanc
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 2*Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.restore();
  }
  
  //Ecrit les spnsos dans les deux angles
  function drawSponso() {
    ctx.save();
    //coin haut gauche
    ctx.translate(120,170);
    ctx.rotate(-1);
    ctx.font = "15pt Calibri";
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("O'Jump", 0, 0);
    ctx.restore();
    //coin bas droit
    ctx.save();
    ctx.translate(475,425);
    ctx.rotate(2.2);
    ctx.translate(0,-10);
    ctx.font = "15pt Calibri";
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("O'Jump", 0, 0);
    ctx.restore();
  }
  
  //Affiche le nombre de match gagnés entre les joueurs 
  //a travers les matchs jouer
  function drawNbrMatchWin(p1,p2){
    ctx.save()
    ctx.translate(275,25);
    ctx.font = "20pt Calibri";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.fillText(players[1].matchPerdu,0,0);
    ctx.strokeText(players[1].matchPerdu,0,0)
    ctx.translate(25,0);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.fillText(players[0].matchPerdu,0,0);
    ctx.strokeText(players[0].matchPerdu,0,0)
    ctx.restore()
  }
  
  //Fonction qui indique le niveau de boost du joueur
  function lvlBoost(joueur, drawx){
    ctx.save();
    ctx.translate(drawx,25);
    ctx.font = "15pt Calibri";
    ctx.fillStyle = "black";
    if (joueur.numberPlayer == 1){
      ctx.strokeStyle = "red";
      ctx.strokeText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    }
    else if(joueur.numberPlayer == 2){
      ctx.strokeStyle = "blue";
      ctx.strokeText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    }
    ctx.fillText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    ctx.translate(0,15);
    ctx.strokeStyle='black';
    ctx.fillStyle= "#F0FFEE";
    ctx.lineWidth=1;
    roundedRect(ctx, 0, 0, 60, 10, 2, true, true);
    if(joueur.nbrBoost == 1){
      ctx.fillStyle= "#B6FFAC";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 20, 8, 2, true, true);
    }
    if(joueur.nbrBoost == 2){
      ctx.fillStyle= "#8AFD79";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 40, 8, 2, true, true);
    }
    if(joueur.nbrBoost >= 3){
      ctx.fillStyle= "#2DEE20";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 60, 8, 2, true, true);
    }
    ctx.restore();
}


  //EN TEST /!\ /!\ Affichage de la barre d'endurance
  function lvlBoost(joueur, drawx){
    ctx.save();
    ctx.translate(drawx,25);
    ctx.font = "15pt Calibri";
    ctx.fillStyle = "black";
    if (joueur.numberPlayer == 1){
      ctx.strokeStyle = "red";
      ctx.strokeText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    }
    else if(joueur.numberPlayer == 2){
      ctx.strokeStyle = "blue";
      ctx.strokeText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    }
    ctx.fillText(pseudoJoueur[joueur.numberPlayer - 1], 0, 0);
    ctx.translate(0,15);
    ctx.strokeStyle='black';
    ctx.fillStyle= "#F0FFEE";
    ctx.lineWidth=1;
    roundedRect(ctx, 0, 0, 60, 10, 2, true, true);
    if(joueur.nbrBoost == 1){
      ctx.fillStyle= "#B6FFAC";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 20, 8, 2, true, true);
    }
    if(joueur.nbrBoost == 2){
      ctx.fillStyle= "#8AFD79";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 40, 8, 2, true, true);
    }
    if(joueur.nbrBoost >= 3){
      ctx.fillStyle= "#2DEE20";
      ctx.lineWidth=0.5;
      roundedRect(ctx, 0, 1, 60, 8, 2, true, true);
    }
    ctx.restore();
}
// FIN FONCTION /!\ /!\ 




//Fonction qui permet de faire spawner des petit cercle sur
//le tapis (représente des booster pour le sprint)
function spawnRandomCircle(cx,cy){
    
    if (colisionCircles(cx, cy, 5, 300, 300, 175)){
        boostX = cx;
        boostY = cy;
        ctx.save();
        //console.log();
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, 2*Math.PI, false);
        ctx.fillStyle = "#2DEE20";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#2DEE20";
        ctx.stroke();
        ctx.restore();
        return true;
    }
    return false;
}

let cmpClignote = 0;

//Affiche le vainqueur
function draWinner(Winner,playerW,playerL){
  restart = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  players[playerL].x = 1000;
  players[playerW].x = 287;
  players[playerW].y = 275;
  drawRing();
  drawCircles();
  drawSponso();
  players.map(p => {
      p.draw();
    });
  ctx.save();
  ctx.translate(200,40);
  ctx.font = "45pt Calibri";
  ctx.fillStyle = "black";
  if (playerW == 0){
    ctx.strokeStyle = "red";
  }
  if (playerW == 1){
    ctx.strokeStyle = "blue";
  }
  ctx.fillText("Winner",0,0);
  ctx.strokeText("Winner",0,0);
  ctx.translate(0,48);
  ctx.fillText(pseudoJoueur[Winner],0,0);
  ctx.strokeText(pseudoJoueur[Winner],0,0);
  ctx.translate(200,-48);
  ctx.font = "20pt Calibri";
  if((players[0].scorePlayer>0 && players[1].scorePlayer>0)){
    ctx.fillText("(points)",0,0);
    ctx.strokeText("(points)",0,0);
  }
  else{
    ctx.fillText("(out)",0,0);
    ctx.strokeText("(out)",0,0);
  }
  ctx.translate(-200,48);
  ctx.translate(10,265);
  ctx.font = "15pt Calibri";
  ctx.fillStyle = "black";
  if (cmpClignote<35){
    ctx.fillText("Press 'Enter' to continue",0,0);
  }
  if(cmpClignote>70){
    cmpClignote = 0; 
  }
  //console.log(cmpClignote);
  cmpClignote++;
  ctx.restore();
}

//Affiche le tableau des scores
function scoreBoard(){
  ctx.save();
  ctx.translate(250,30);
  ctx.fillStyle= "#FFFFFE";
  ctx.lineWidth=2;
  roundedRect(ctx, 0, 0, 90, 20, 2, true, true);
  ctx.fillStyle= "red";
  ctx.lineWidth=0.5;
  roundedRect(ctx, 0, 0, players[0].scorePlayer*15, 20, 2, true, true);
  ctx.fillStyle= "blue";
  ctx.lineWidth=0.5;
  roundedRect(ctx,90 - players[1].scorePlayer*15, 0, players[1].scorePlayer*15, 20, 2, true, true);
  if(switchPlayer  ){
    ctx.save();
    ctx.translate(20,65);
    ctx.font = "15pt Calibri";
    ctx.fillStyle = "black"
    ctx.fillText("Switch", 0, 0);
    ctx.restore();
  }
  ctx.restore();
}

function drawChrono(t,ms){
  var time = Math.trunc(t/60);
  ctx.save();
  ctx.translate(245,538);
  ctx.fillStyle = "rgba(64, 63, 63,1)";
  ctx.lineWidth = 2;
  roundedRect(ctx, 0, 0, 10, 24, 2, true, true);
  roundedRect(ctx, 110, 0, 10, 24, 2, true, true);
  ctx.translate(-245,-538);
  ctx.translate(255,525);
  ctx.fillStyle = "rgba(64, 63, 63,0.85)";
  if((time <= 10 && time%2 == 0) || time == 30){
    ctx.fillStyle = "rgba(200, 2, 2,0.7)";
  }
  ctx.lineWidth = 2;
  roundedRect(ctx, 0, 0, 100, 50, 2, true, true);
  ctx.translate(25,32);
  if(time < 10){
    ctx.translate(0,0);
  }
  ctx.font = "20pt Calibri";
  ctx.fillStyle = "white";
  if(time < 60){
    ctx.fillText(time%60 + " : " + ms, 0, 0);
  }
  else if(time >= 60){
    ctx.fillText(Math.trunc(time/60) + " : " + time%60, 0, 0);
  }
  ctx.restore();
}