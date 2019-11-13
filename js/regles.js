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

let appuye = false;
//POUR LE GAMEPAD
function checkButtons(gamepad) {
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    console.log(gamepad.buttons[0].value+" "+appuye+" "+pageReglesAng+" "+pageRegles);
    if(gamepad.buttons[0].pressed ){
        appuye = true;
    }
      //console.log("A");
    if(gamepad.buttons[0].value == 0 && appuye){
        if (pageOptionAng == 0){
            Op = false;
            pageOption = 3;
                //RedirectionPage("options.html");
        }
        else if(pageOption == 0){
            OpAn = false;
            pageOptionAng = 3;
                //RedirectionPage("optionsAng.html");
        }
        else if (pageReglesAng == 0){
            Re = false;
            pageRegles = 3;
                //RedirectionPage("regles.html");
        }
        else if (pageRegles == 0){
            ReAn = false;
            pageReglesAng = 3;
                //RedirectionPage("reglesAng.html");
        }
        appuye = false;
    }
    
    else if(gamepad.buttons[0].unpressed){
        console.log("unpressed");
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
    if(pageRegles == 3){
        RedirectionPage("regles.html");
    }
    if(pageReglesAng == 3){
        RedirectionPage("reglesAng.html");
    }
    if(pageOption == 3){
        RedirectionPage("options.html");
    }
    if(pageOptionAng == 3){
        RedirectionPage("optionsAng.html");
    }
    requestAnimationFrame(anime60fps);
}