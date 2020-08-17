class Projo{
    constructor(Xpos,Ypos,w,h){
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.w = w;
        this.h = h;  
    }
    draw(){
        //couleurs 
        const bodyProjo = "#48D1CC";
        const headProjo = "#B22222";
        ctx.lineWidth = 1;
        //body Projo
        ctx.beginPath();
        ctx.fillStyle = bodyProjo;
        ctx.strokeStyle = "#ecf0f1";
        ctx.fillRect(this.Xpos,this.Ypos,this.w,this.h);
        ctx.closePath(); 
        //head Projo
        ctx.beginPath();
        ctx.fillStyle = headProjo;
        ctx.moveTo(this.Xpos,this.Ypos);
        ctx.lineTo(this.Xpos+15,this.Ypos-14);
        ctx.lineTo(this.Xpos+30,this.Ypos);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}