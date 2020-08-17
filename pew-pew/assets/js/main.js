    //VAR
    let clafin = true;
    let rayon = 20;
    let score = 0;
    
    let char = new Char(255,550,150,50,"green");
    let cible = new Target(150,150,0,0);
    

    
    
    cible.draw();
    char.draw();
    
    
    //Function
    function Clear(xpos,ypos,w,h){
        ctx.clearRect(xpos, ypos, w,h);
       
    }
    function move(){
        Clear(cible.Xpos,cible.Ypos,-31,31);
        Clear(cible.Xpos,cible.Ypos,31,-31);
        Clear(cible.Xpos,cible.Ypos,-31,-31);
        Clear(cible.Xpos,cible.Ypos,31,31);
        moveTarget();
        
    }
    function clearProjo(xpos,ypos){
        ctx.clearRect(xpos-3,ypos-14,45,64);
    }
    function clearChar(xpos,ypos){
        ctx.clearRect(xpos,ypos-75,150,125);
    }
    
    function moveTarget(){
        if (clafin == false) {
            if (cible.Xpos != 580) {
                cible.Xpos += 1;
                cible.draw();
            } else {
                clafin = true;
            }
        } else {
            if (cible.Xpos != 25) {
                cible.Xpos -= 1;
                cible.draw();
            } else {
                clafin = false;
            }
        }
        }

    function rocketLaunch(){
        let missile = new Projo(char.Xpos+68,char.Ypos-55,25,50);
            let interval = setInterval(()=>{
                if(missile.Ypos < -70){
                    clearInterval(interval);
                    clearProjo(missile.Xpos,missile.Ypos);
                }
                clearProjo(missile.Xpos,missile.Ypos);
                char.draw();
                missile.Ypos-=5;
                missile.draw();
                if( Math.abs(missile.Xpos - cible.Xpos) < cible.rayon && 
                    Math.abs(missile.Ypos - cible.Ypos) < cible.rayon ){
                    collide();
                }
                function collide(){
                    clearInterval(interval);
                    clearProjo(missile.Xpos,missile.Ypos);
                    score++;
                    scoreCount();
                    

                }
        },25)
        }
    
    function scoreCount(){
        document.getElementById('score').innerHTML = score;
    }
    


    //Event
    document.addEventListener('keyup', function control() {
        if(event.keyCode === 37 ||char.Xpos >= 455) {
            clearChar(char.Xpos,char.Ypos); 
                char.Xpos -=20;
                char.draw();
        }
        if (event.keyCode === 38) {
            rocketLaunch();
        }
        if (event.keyCode === 39 || char.Xpos <= -6) {
            clearChar(char.Xpos,char.Ypos);
                char.Xpos += 20;
                char.draw();
            
        }
      });
      
      setInterval(move,10);   
