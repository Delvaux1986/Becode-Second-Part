let c= document.getElementById('myCanvas');
let ctx = c.getContext('2d');


class Char {
    constructor(Xpos,Ypos,w,h,color) { // x y position , w h width height
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    
    draw() {
        let black = "#000";
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "#ecf0f1";
        ctx.fillRect(this.Xpos,this.Ypos,this.w,this.h);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.Xpos+78,this.Ypos+32,30,0,Math.PI*2,false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        
        ctx.fillRect(this.Xpos+70,this.Ypos-75,this.w-130,this.h+25);
        ctx.strokeStyle = black;
        ctx.stroke();
        ctx.closePath(); 
    }
    set Move(xOffset){
        this.Xpos = this.Xpos + xOffset;
        
    }
   }
   