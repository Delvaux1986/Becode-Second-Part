const readlineSync = require("readline-sync");

let n = readlineSync.question('Combien voulez ajouté de chiffre random ? :');
let array = [];


function rand10(){ // sort un chiffre entre 1 & 10
    return parseInt(Math.random() * (10 - 0) + 0);
}


function multiRand(n){   // function qui cree le tableau et implante le chiffre random
    for (let i = 0; i <= n; i++) {
        array.push(rand10());
      }  
      return array;
    }

multiRand(--n);     // call function 


let max = this.Math.max(...array);  // on cherche dans l'array le plus gros chiffre
let min = this.Math.min(...array);  // on cherche dans l'array le plus petit chiffre
let avr = eval(array.join('+'))/array.length; // on fais un avr addition de tous le tableau puis / par la taille du tableau
 


console.log("Votre Tableau est  : " + array +
            "\nVous avez entrez : "+ n +" Chiffres dans le tableau",
            "\nLe chiffre le plus grand du tableau:" + max + 
            "\nEt le plus petit est : " + min +
            "\nL'avverage du tableau est :" + avr);