
//POUR LE GAMEPAD
function checkButtons(gamepad) {
  
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    if(gamepad.buttons[4].pressed){
      //console.log("Y");
      players[1].deplacement(0,0);
    }
    if(gamepad.buttons[3].pressed && players[1].acc == false){
      //console.log("X");
      if (players[1].nbrBoost > 0 && players[1].acc == false){
       players[1].acc = true;
       players[1].nbrBoost -= 1;
      }
    }
    if(gamepad.buttons[0].pressed){
      //console.log("A");
      if (players[1].nbrBoost>1){
       players[1].nbrBoost -= 2;
       if (switchPlayer ){
        switchPlayer = false;
       }
       else {
        switchPlayer = true;
       }
      }
    }
    if(gamepad.buttons[1].pressed){
      //console.log("B");
      if (players[1].nbrBoost>2){
       players[1].nbrBoost -= 3;
       if (stoneAttack2 ){
        stoneAttack2 = false;
       }
       else {
        stoneAttack2 = true;
        //switchPlayer = false;
       }
      }
    }
  }
  
  function chekAxes(gamepad){
    if(gamepad === undefined) return;
    if(!gamepad.connected) return;
    if(gamepad.axes[9] == -1){
      //console.log("haut");
      players[1].deplacement(0,-1);
    }
    if(gamepad.axes[9].toFixed(4) == 0.7143){
      //console.log("gauche");
      players[1].deplacement(-1,0);
    }
    if(gamepad.axes[9].toFixed(4) == -0.4286){
      //console.log("droite");
      players[1].deplacement(1,0);
    }
    if(gamepad.axes[9].toFixed(4) == 0.1429){
      //console.log("bas");
      players[1].deplacement(0,1);
    }
    
    
  }
  
  function scangamepads() {
    var gamepads = navigator.getGamepads();
    
    for (var i = 0; i < gamepads.length; i++) {
      if(gamepads[i])
          gamepad = gamepads[i]; 
    }
  }