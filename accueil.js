window.onload = init;
var gamepad;
var wait = false;
var waitButton = true;
var waitTemps = 0;
var waitTempsButton = 0;
var pussA = false;


function init() {
    canvas = document.querySelector('#Canvas');
    ctx = canvas.getContext("2d");
    pointeur = 1;
    draw();
    pointeur = 0;
    draw();
    requestAnimationFrame(anime60fps);
    
}

function RedirectionPage(lien){
    document.location.href=lien; 
}

var Pages = ["choixPseudo1v1.php","creerTournoi.php","options.html","regles.html"];
var pointeur = 0;


function getKeyAndMove(e) {				
	var key_code=e.which||e.keyCode;
    var key_press=e.which||e.onkeydown;
	switch(key_code){
		case 38: //Up arrow key
			if(pointeur - 1 == -1){
                pointeur = 3;
                clignotte = 0;
            }
            else{
                pointeur -= 1;
                clignotte = 0;
            }
			break;
		case 40: //Down arrow key
            if(pointeur + 1 == 4){
                pointeur = 0;
                clignotte = 0;
            }
            else{
                pointeur += 1;
                clignotte = 0;
            }
			break;
        case 13: //Enter key
        RedirectionPage(Pages[pointeur])
			break;
        default:
    }
}

function draw(){
    ctx.save()
    ctx.translate(250,250);
    ctx.fillStyle = "#282828";    
    ctx.font = "25pt Calibri";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillText("1v1",0,0);
    ctx.fillText("Tournoi",0,40);
    ctx.fillText("Options",0,80);
    ctx.fillText("Règles",0,120);
    ctx.strokeText("1v1",0,0);
    ctx.strokeText("Tournoi",0,40);
    ctx.strokeText("Options",0,80);
    ctx.strokeText("Règles",0,120);
    if(pointeur == 0 ){
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.strokeText("1v1",0,0);
    }
    else if(pointeur == 1 ){
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.strokeText("Tournoi",0,40);
    }
    else if(pointeur == 2 ){
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.strokeText("Options",0,80);
    }
    else if(pointeur == 3 ){
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.strokeText("Règles",0,120);
    }
    ctx.restore();
}

var clignotte = 0;

function drawCurseur(){
    if (clignotte < 25){
        ctx.save();
        ctx.translate(225,250)
        if(pointeur == 0){
            ctx.fillStyle = "#282828";    
            ctx.font = "25pt Calibri";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.fillText(">",0,0);
            ctx.strokeText(">",0,0);
        }
        else if(pointeur == 1){
            ctx.translate(0,40);
            ctx.fillStyle = "#282828";    
            ctx.font = "25pt Calibri";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.fillText(">",0,0);
            ctx.strokeText(">",0,0);
        }
        else if(pointeur == 2){
            ctx.translate(0,80);
            ctx.fillStyle = "#282828";    
            ctx.font = "25pt Calibri";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.fillText(">",0,0);
            ctx.strokeText(">",0,0);
        }
        else if(pointeur == 3){
            ctx.translate(0,120);
            ctx.fillStyle = "#282828";    
            ctx.font = "25pt Calibri";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.fillText(">",0,0);
            ctx.strokeText(">",0,0);
        }
        ctx.restore();
    }
    else if(clignotte >50){
        clignotte = 0;
    }
    clignotte++;
}



function anime60fps(){
    
        waitButton = true;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw()
        drawCurseur();
        scangamepads();
        if(!wait){
            waitTemps++;
            if(waitTemps > 10){
                waitTemps = 0;
                wait = true;
            }
        }
        checkButtons(gamepad);
        if(!waitButton){
            waitButton = true;
            RedirectionPage(Pages[pointeur])
        }
        chekAxes(gamepad);
        //console.log(wait)
        requestAnimationFrame(anime60fps); 
    
}

