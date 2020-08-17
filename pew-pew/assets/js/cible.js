


class Target {
    constructor(Xpos,Ypos) { // x y position , rayon & angle de depart
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.rayon = 30 ;
         
    }
    
    draw(){
        //Couleur
        const firstColor = "#FF0000" ;
        const secondColor = "#0000F";
        ctx.lineWidth = 1;
        //first Cercle
        ctx.beginPath();
        ctx.fillStyle = firstColor;
        ctx.strokeStyle = secondColor;
        ctx.arc(this.Xpos, this.Ypos, this.rayon,  Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //second cercle
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = secondColor;
        ctx.arc(this.Xpos, this.Ypos, 20,0 ,  Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath(); 
        //Troisieme cercle 
        ctx.beginPath();
        ctx.fillStyle = firstColor;
        ctx.strokeStyle = secondColor;
        ctx.arc(this.Xpos, this.Ypos, 10,0 ,  Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();  
    }
    
   }

   
    