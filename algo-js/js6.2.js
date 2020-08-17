const readlineSync = require("readline-sync");


class Rectangle{  // class rectangle prend 4 argu ( topleftXpos , topleftYpos , width , length)
    constructor(topLeftXPos ,topLeftYPos , width ,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){       // on verifie si il est au meme endroit qu'un autre rectangle
    if(this.topLeftXPos === otherRectangle.topLeftXPos || this.topLeftYPos === otherRectangle.topLeftYPos){
        return true; // renvoi oui si il a les memes coordonnées 
    }else{
        return false; // sinon renvoi non 
    }
    }
}


askX = parseInt(readlineSync.question('Veuillez entrez la position X top left en px: '));
askY = parseInt(readlineSync.question('Veuillez entrez la position Y top left en px: '));
rectWidth = parseInt(readlineSync.question('Veuillez entrez la largeur de votre rectangle en px : '));
rectLength = parseInt(readlineSync.question('Veuillez entrez la longueur de votre rectangle en px : '));

rect1 = new Rectangle(155,233,100,50);  // rectangle 1 
rect2 = new Rectangle(askX,askY,rectWidth,rectLength); // rectangle 2 

console.log("Les rectangles se chevauchent ils ? : " + rect1.collides(rect2)); // on check si il sont en meme position  Y ou X