//-------------Fonctions---Importantes---------------------//

//Lis l'URL pour avoir les pseudo des joueurs
function findPseudo(sVariable) {
  // Éliminer le "?"
  var sReq = window.location.search.substring(1);
  // Matrice de la requête
  var aReq = sReq.split("&");
  // Boucle les variables
  for (var i=0;i<aReq.length;i++) {
    // Matrice de la variables / valeur
    var aVar = aReq[i].split("=");
    // Retourne la valeur si la variable 
    // demandée = la variable de la boucle
    if(aVar[0] == sVariable){return aVar[1];}
  }
  // Aucune variable de trouvée.
  return(false);
}
//Redirige vers une autre page
function RedirectionPage(lien){
    document.location.href=lien; 
}

//Fonction donnant un entier aléatoir entre 0 et max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Collision de 2 cercles
function colisionCircles(c1x, c1y, r1, c2x, c2y, r2){
  let dx = c1x - c2x;
  let dy = c1y - c2y;
  let distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < r1 + r2){
      //collision détectée
      return true;
  }
}

//Fonction permetant de créer des rectangles (avec bords arondis si voulu)
var roundedRect=function(ctx,x,y,width,height,radius,fill,stroke)
{
  ctx.beginPath();
  // draw top and top right corner
  ctx.moveTo(x+radius,y);
  ctx.arcTo(x+width,y,x+width,y+radius,radius);
  // draw right side and bottom right corner
  ctx.arcTo(x+width,y+height,x+width-radius,y+height,radius); 
  // draw bottom and bottom left corner
  ctx.arcTo(x,y+height,x,y+height-radius,radius);
  // draw left and top left corner
  ctx.arcTo(x,y,x+radius,y,radius);
  if(fill){
    ctx.fill();
  }
  if(stroke){
    ctx.stroke();
  }
};

//Converti les radians en degrés
function radians_to_degrees(radians)
{
var pi = Math.PI;
return radians * (180/pi);
}

//Collision entre un rectangle et un cercle
function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
 var testX=cx;
 var testY=cy;
 if (testX < x0) testX=x0;
 if (testX > (x0+w0)) testX=(x0+w0);
 if (testY < y0) testY=y0;
 if (testY > (y0+h0)) testY=(y0+h0);
 return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
}

//Fonction switchPlayers qui inverse la position entre le joueur 1 et je joueur 2
function switchPlayers(){
let tmpx = players[0].x;
let tmpy = players[0].y;
players[0].x = players[1].x;
players[0].y = players[1].y;
players[1].x = tmpx;
players[1].y = tmpy;
}

function bigAttack(att,def){
players[def].x = players[def].x + players[att].dx*(60 + getRandomInt(20)) + getRandomInt(20);
players[def].y = players[def].y + players[att].dy*(60 + getRandomInt(20)) + getRandomInt(20);
players[att].dx = 0;
players[att].dy = 0;

}

let recul1 = 1;
let recul0 = 1;

//Matérialise les effets de la collision (changement de direction)
//entre deux joueurs mis en paramètre
function colPlayer(p0,p1){
if(players[p0].isColision(players[p1])){
  if (switchPlayer && !stoneAttack1 && !stoneAttack2){
    switchPlayers();
    switchPlayer = false;
  }
  else if (stoneAttack1){
    bigAttack(0,1);
    stoneAttack1 = false;
  }
  else if (stoneAttack2){
    bigAttack(1,0);
    stoneAttack2 = false;
  }
  else {
    players[p0].x = players[p0].x + players[p1].dx*(recul1 + 10);
    players[p0].y = players[p0].y + players[p1].dy*(recul1 + 10);
    players[p1].x = players[p1].x + players[p0].dx*(recul0 + 10);
    players[p1].y = players[p1].y + players[p0].dy*(recul0 + 10);
  } 
}
}
//---------------------------------------------------------------------//