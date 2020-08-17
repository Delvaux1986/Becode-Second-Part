const readlineSync = require("readline-sync");


class Circle { // class circle ( 3 arguments xpos ypos et radius)
    constructor(Xpos ,Ypos ,radius){
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.radius = radius;
    }
    move(xOffset,yOffset){ // method move bouge le cercle
        this.Xpos = this.Xpos + xOffset;
        this.Ypos = this.Ypos + yOffset;
    }
    get Surface(){ // calcul de la surface
        return Math.PI * (this.radius*this.radius);
    }
}

let askX = parseInt(readlineSync.question('Veuillez entrez la coordonée X de votre cercle :' ));
let askY = parseInt(readlineSync.question('Veuillez entrez la coordonée Y de votre cercle :' ));
let askRadius = parseInt(readlineSync.question('Entrez aussi le Radius que vous voulez : '));

let CircleUser = new Circle(askX,askY,askRadius);  //creation new circle avec arguments demandé a l user

console.log("La surface de votre cercle est de " + CircleUser.Surface + 
            "\nEt votre cercle commencera en position X : " +CircleUser.Xpos +"px"
           , "\nEt votre cercle commencera en position Y : " +CircleUser.Ypos+ "px");