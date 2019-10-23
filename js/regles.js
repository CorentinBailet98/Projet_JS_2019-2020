window.onload = init;
var gamepad;

function RedirectionPage(lien){
    document.location.href=lien; 
}

function getKeyAndMove(e) {				
	var key_code=e.which||e.keyCode;
    var key_press=e.which||e.onkeydown;
	switch(key_code){
        case 32: //Esc key
            RedirectionPage("index.html");
			break;
        default:
    }
    switch(key_code){
        case 84: //T key
            if (pageOptionAng == 0){
                pageOption = 0;
                RedirectionPage("options.html");
			    break;
            }
            else if(pageOption == 0){
                pageOption = 1;
                RedirectionPage("optionsAng.html");
			    break;
            }
            else if (pageReglesAng == 0){
                pageRegles = 0;
                RedirectionPage("regles.html");
			    break;
            }
            else if (pageRegles == 0){
                pageRegles = 1;
                RedirectionPage("reglesAng.html");
			    break;
            }
			break;
        default:
    }
}
var Op = true;
var OpAn = true;
var Re = true;
var ReAn = true;
var waitTime = true;

//POUR LE GAMEPAD
function checkButtons(gamepad) {
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    if(gamepad.buttons[0].pressed && waitTime){
        waitTime = false;
      //console.log("A");
        if (pageOptionAng == 0 && Op){
            Op = false;
            pageOption = 0;
            //RedirectionPage("options.html");
        }
        else if(pageOption == 0 && OpAn){
            OpAn = false;
            pageOption = 1;
            //RedirectionPage("optionsAng.html");
        }
        else if (pageReglesAng == 0 && Re){
            Re = false;
            pageRegles = 0;
            //RedirectionPage("regles.html");
        }
        else if (pageRegles == 0 && ReAn){
            ReAn = false;
            pageRegles = 1;
            //RedirectionPage("reglesAng.html");
        }
    }
    if(gamepad.buttons[1].pressed){
        //console.log("B");
        RedirectionPage("index.html")
      }
    
}
  function scangamepads() {
    var gamepads = navigator.getGamepads();
    
    for (var i = 0; i < gamepads.length; i++) {
      if(gamepads[i])
          gamepad = gamepads[i]; 
    }
}

function init() {
    
    requestAnimationFrame(anime60fps);
    
}

//var load = 0;

function anime60fps(){
    Op = true;
    OpAn = true;
    Re = true;
    ReAn = true;
    waitTime = true
    scangamepads();
    /*
    if(load <= 30){
        load++;
    }*/
    checkButtons(gamepad);
    if(!waitTime){
        waitTime = true;
        
        if(!Op){
            Op = true;
            RedirectionPage("options.html")
        }
        if(!OpAn){
            OpAn = true;
            RedirectionPage("optionsAng.html")
        }
        if(!Re){
            Re = true;
            RedirectionPage("regles.html")
        }
        if(!ReAn){
            ReAn = true;
            RedirectionPage("reglesAng.html")
        }
         
    } 
    requestAnimationFrame(anime60fps);
}