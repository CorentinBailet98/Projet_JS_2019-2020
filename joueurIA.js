function deplacementIA(x,y,dx,dy){
    x = dx;
    y = dy;
}


function directionIAObjet(x,y,objetX,objetY){
    if(x - objetX <= y - objetY){
        if(x - objetX < 0){
            return [1,0];
        }
        else if(x - objetX > 0){
            return [-1,0];
        }
        else {
            if(y - objetY < 0){
                return [0,1];
            }
            else if(y - objetY > 0){
                return [0,-1];
            } 
        }
    }
    else if(x - objetX > y - objetY){
        
        if(y - objetY < 0){
            return [0,1];
        }
        else if(y - objetY > 0){
            return [0,-1];
        }
        else {
            
            if(x - objetX < 0){
                return [1,0];
            }
            else if(x - objetX > 0){
                return [-1,0];
            } 
        }
    }
    else{
        return [0,0];
    }
}

function retourCentre(i,x,y){
    if(Math.cos(x-300) >= Math.cos(Math.sqrt(2)/2) &&
    Math.sin(y-300) >= Math.sin(Math.sqrt(2)/2) &&
    Math.sin(y-300) <= Math.sin(-Math.sqrt(3)/2) ){
        deplacementIA(x,y,-1 * i,0);
        return [-1 * i,0];
    }
    else if(Math.cos(x-300) <= Math.cos(-Math.sqrt(2)/2) &&
    Math.sin(y-300) >= Math.sin(Math.sqrt(2)/2) &&
    Math.sin(y-300) <= Math.sin(-Math.sqrt(3)/2) ){
        deplacementIA(x,y,1 * i,0);
        return [1 * i,0];
    }
    else if(Math.sin(y-300) < Math.sin(-Math.sqrt(3)/2) &&
    Math.cos(x-300) < Math.cos(Math.sqrt(2)/2) &&
    Math.cos(x-300) > Math.cos(-Math.sqrt(2)/2) ){
        deplacementIA(x,y,0, 1 * i);
        return [0, 1 * i];
    }
    else {
        deplacementIA(x,y,0, -1 * i);
        return [0, -1 * i];
    }
}

function distance2points(x1,y1,x2,y2){
    if(x1 == false || x2 == false || y1 == false || y2 == false){
        return false;
    }
    return Math.sqrt(Math.pow(Math.abs(x1 - x2),2) + Math.pow(Math.abs(y1 - y2),2));
}

function checkOutCercle(x,y,width,height){
    ctx.save();
    ctx.translate(300,300);
    //regarde si l'IA se rapproche de la zone
    if (circRectsOverlap(x, y, width, height, 300, 300, 100)){
      ctx.restore();
      
      return false;
    }
    ctx.restore();
      return true;
}

function bigAttackIA(defX,defY,dx,dy){
    defX = defX + dx*(60 + getRandomInt(20)) + getRandomInt(20);
    defY = defY + dy*(60 + getRandomInt(20)) + getRandomInt(20);
    dx = 0;
    dy = 0;
    
    }


let joueurX;
let joueurY;
let retourFctDeplacerIA = [];
function deplacerIA(x,y,acc,nbrB,dx,dy,width,height){
    players.map(p => {
        //ON VERIFIE QUE C'EST PAS UNE IA
        if(p.IA == false){
            joueurX = p.x;
            joueurY = p.y;
        }
    });
    
    if(therIsBoost && 
        distance2points(x,y,boostX,boostY) <= distance2points(joueurX,joueurY,boostX,boostY) &&
        nbrB <3){
            //console.log("l'IA va chercher le boost !");
            retourFctDeplacerIA = directionIAObjet(x+12,y+25,boostX,boostY);
            retourFctDeplacerIA.push(false,nbrB);
            return retourFctDeplacerIA;
        }
    else if (!therIsBoost){
        if(!checkOutCercle(x,y,width,height)){
            retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
            retourFctDeplacerIA.push(false,nbrB);
            //console.log(retourFctDeplacerIA)
            //>>> [dx, dy, acc]
            return retourFctDeplacerIA;
        }
        else{
            //console.log("hors du cercle")
            if(nbrB == 0){
                if(distance2points(x,y,300,300) < distance2points(joueurX,joueurY,300,300)){
                    retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                    retourFctDeplacerIA.push(false,nbrB);
                    return retourFctDeplacerIA;
                }
                else{
                    retourFctDeplacerIA = directionIAObjet(x,y,300,300);
                    retourFctDeplacerIA.push(false,nbrB);
                    return retourFctDeplacerIA;
                }
            }
            else if(nbrB == 1 && acc == false && checkOutCercle(joueurX,joueurY,25,50)){
                //console.log("l'IA accélère !");
                nbrB -= 1;//-----------------------------------------------//
                retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                retourFctDeplacerIA.push(true,nbrB);
                return retourFctDeplacerIA;
            }
            else if(nbrB == 2){
                if(distance2points(x,y,300,300) < distance2points(joueurX,joueurY,300,300)){
                    nbrB -= 1;//-----------------------------------------------//
                    retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                    retourFctDeplacerIA.push(true,nbrB);
                    return retourFctDeplacerIA;
                }
                else{
                    //console.log("l'IA switch !");
                    if (switchPlayer ){
                        switchPlayer = false; 
                      }
                      else {
                        switchPlayer = true;
                      }
                    nbrB -= 2;
                    retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                    retourFctDeplacerIA.push(true,nbrB);
                    return retourFctDeplacerIA;
                }
            }
            else if(nbrB == 3){
                if(distance2points(x,y,300,300) < distance2points(joueurX,joueurY,300,300)){
                    //console.log("l'IA switch !");
                    if (switchPlayer ){
                        switchPlayer = false; 
                    }
                    else {
                        switchPlayer = true;
                    }
                    nbrB -= 2;
                    retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                    retourFctDeplacerIA.push(true,nbrB);
                    return retourFctDeplacerIA;
                }
                else{
                    //console.log("l'IA propulse !");
                    if (stoneAttack2 ){
                        stoneAttack2 = false;
                    }
                    else {
                        stoneAttack2 = true;
                    }
                    nbrB -= 3;
                    retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                    retourFctDeplacerIA.push(true,nbrB);
                    return retourFctDeplacerIA;
                }
            }
            else{
                retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
                retourFctDeplacerIA.push(false,nbrB);
                return retourFctDeplacerIA;
            }
        }
    }
    else{
        retourFctDeplacerIA = directionIAObjet(x,y,joueurX,joueurY);
        retourFctDeplacerIA.push(false,nbrB);
        return retourFctDeplacerIA;
    }
}