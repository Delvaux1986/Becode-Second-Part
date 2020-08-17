const readlineSync = require("readline-sync");

let askInt = parseInt(readlineSync.question('Entrez un chiffre :'));
let arrayDiviseur = [];


function check(int){
    for(let i = 2; i<int ; i++){
        if(int%i===0){
            arrayDiviseur.push(i);
            
        }
    }
}

check(askInt);

console.log(arrayDiviseur);