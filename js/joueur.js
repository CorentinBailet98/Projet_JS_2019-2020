
//Classe joueur
class joueur{
  constructor(x,y,color,hair,acc,ctx,nbrBoost,numberPlayer,scorePlayer,matchPerdu,IA,nbrBoostRecolter){
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 50;
    this.hair = hair;
    this.nbrBoost = nbrBoost;
    this.numberPlayer = numberPlayer;
    this.scorePlayer = scorePlayer;
    this.matchPerdu = matchPerdu;
    this.IA = IA;
    this.nbrBoostRecolter = nbrBoostRecolter;
    this.dx = 0;
    this.dy = 0;
    this.acc = acc;
    this.color = color;
    this.ctx = ctx
  }
  
  //dessine un joueur
  draw(){
    ctx.save();
    ctx.strokeStyle='black';
    ctx.fillStyle= "#F7B041";
    ctx.lineWidth=0.5;
    roundedRect(ctx, this.x, this.y, this.width, this.height, 2, true, true);
    ctx.strokeStyle='black';
    ctx.fillStyle= this.color;
    ctx.lineWidth=0.5;
    roundedRect(ctx, this.x, this.y+10, this.width, this.height-20, 2, true, true);
    ctx.strokeStyle='black';
    ctx.fillStyle= "#F7B041";
    ctx.lineWidth=0.5;
    roundedRect(ctx, this.x+3, this.y+13, this.width-6, this.height-26, 5, true, true);
    ctx.beginPath();
    ctx.arc(this.x+(this.width/2), this.y+(this.height/2), 6, 0, 2*Math.PI, false);
    ctx.fillStyle = this.hair;
    ctx.fill();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "black";
    this.ctx.stroke();
    ctx.restore();
  }
  
  //modifie la direction de déplacement
  deplacement(x,y){
     this.dx = x;
     this.dy = y;
    
  }
  
  //fait bouger le joueur
  move(){
    
    if(this.acc){
      this.x += this.dx*3;
      this.y += this.dy*3;
    }
    else{
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  moveIA(){
    //x,y,nbrB,acc,dx,dy,width,height
    parametreIA = deplacerIA(this.x,this.y,this.acc,this.nbrBoost,this.dx,this.dy,this.width,this.height);
    //deplacerIA doit retourner dx,dy,acc,nbrBoost
    console.log(parametreIA[2])
    this.dx = parametreIA[0];
    this.dy = parametreIA[1];
    this.acc = parametreIA[2];
    this.nbrBoost = parametreIA[3]
    if(parametreIA[2] == true){
      this.x += parametreIA[0]*3;
      this.y += parametreIA[1]*3;
    }
    else if(parametreIA[2] == false){
      //console.log(this.dx)
      this.x += parametreIA[0];
      this.y += parametreIA[1];
    }
    else{
      this.x += parametreIA[0];
      this.y += parametreIA[1];
    }
  }
  
  //vérifie si il y a une collision entre un autre joueur donné
  isColision(joueur){
    if((this.x <= joueur.x + joueur.width &&
       this.x + this.width >= joueur.x + joueur.width &&
       this.y <= joueur.y + joueur.height &&
       this.y + this.height >= joueur.y + joueur.height) ||
       (this.x <= joueur.x + joueur.width &&
       this.x + this.width >= joueur.x + joueur.width &&
       this.y + this.height >= joueur.y &&
       this.y <= joueur.y) ||
       (this.x + this.width >= joueur.x &&
       this.x <= joueur.x &&
       this.y + this.height >= joueur.y &&
       this.y <= joueur.y) ||
       (this.x + this.width >= joueur.x &&
       this.x <= joueur.x &&
       this.y <= joueur.y + joueur.height &&
       this.y + this.height >= joueur.y + joueur.height)
    ){
      return true;
    }
    else {
      return false;
    }
  }
  
  //vérifie si le joueur sort du cercle/est bien dans le cercle
  checkOut() {
    ctx.save();
    ctx.translate(300,300);
    if (circRectsOverlap(this.x, this.y, this.width, this.height, 300, 300, 175)){
      ctx.restore();
      
      return false;
    }
    else {
      //si c'est la dernière vie du joueur,
      //l'autre gagne le match et son compteur de victoir +1
      if (this.scorePlayer == 1){
        this.matchPerdu += 1;
      }
      ctx.restore();
      return true;
    } 
  }

  checkPoint(){
    if(chrono == 0 && this.numberPlayer == 1 ){
      if(this.nbrBoostRecolter < players[1].nbrBoostRecolter){
        this.matchPerdu += 1;
      }
    }
    if(chrono == 0 && this.numberPlayer == 2 ){
      console.log("point J")
      if(this.nbrBoostRecolter < players[0].nbrBoostRecolter){
        this.matchPerdu += 1;
      }
    }
  }

  //vérifie si le joueur est sur un boost
  tuchBoost(){
    if(circRectsOverlap(this.x, this.y, this.width, this.height, coordCx, coordCy, 5)){
      if(this.nbrBoost < 3 && boostRecolter == false ){
        this.nbrBoost += 1;
        this.nbrBoostRecolter += 1;
        boostRecolter = true;
        therIsBoost = false;
        boostX = false;
        boostY = false;
      }
      
    }
  }
}