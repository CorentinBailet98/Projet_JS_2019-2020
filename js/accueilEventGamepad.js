
//POUR LE GAMEPAD


function checkButtons(gamepad) {
  
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    console.log(gamepad.buttons[0].pressed);
    if(gamepad.buttons[0].pressed && waitButton){
      //console.log("A");
      waitButton = false;
    }
    
  }
  
  function chekAxes(gamepad){
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    if(gamepad.axes[9] == -1 && wait){
      //console.log("haut");
        if(pointeur - 1 == -1){
            wait = false;
            pointeur = 3;
            clignotte = 0;
        }
        else{
            wait = false;
            pointeur -= 1;
            clignotte = 0;
        }
    }
    if(gamepad.axes[9].toFixed(4) == 0.1429 && wait){
      //console.log("bas");
        if(pointeur + 1 == 4){
            wait = false;
            pointeur = 0;
            clignotte = 0;
        }
        else{
            wait = false;
            pointeur += 1;
            clignotte = 0;
        }
    }
    
    
  }
  
  function scangamepads() {
    var gamepads = navigator.getGamepads();
    
    for (var i = 0; i < gamepads.length; i++) {
      if(gamepads[i])
          gamepad = gamepads[i]; 
    }
  }