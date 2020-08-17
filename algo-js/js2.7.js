const readlineSync = require("readline-sync");

let x = 0;
let result = 0;
let n = readlineSync.question("Put a number here .");

for(let i = 0; i<=n; i++){
     x += parseInt(readlineSync.question("Put a another Number plz "));
};

console.log("Le resultat est : " + x);




