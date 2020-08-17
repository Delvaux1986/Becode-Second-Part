const readlineSync = require("readline-sync");

let n = readlineSync.question('Combien voulez ajouté de chiffre random ? :');

function rand10(){
    return parseInt(Math.random() * (10 - 0) + 0);
}


function multiRand(n){   
    let array = [];
    for (let i = 0; i <= n; i++) {
        array.push(rand10());
      }
      return array;
    }


console.log(multiRand(n));