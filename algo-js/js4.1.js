const readlineSync = require("readline-sync");

hauteur = parseInt(readlineSync.question('Veuillez entrez une Hauteur :'));
largeur = parseInt(readlineSync.question('Veuillez entrez une largeur :'));

function calcSurface(h,l){  // H & L sont les arguments a passé dans la function
    return h * l;           // pour lui indiquer les valeurs a multiplier .
}

console.log("La surface est de : " +calcSurface(hauteur,largeur));