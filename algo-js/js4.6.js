const readlineSync = require("readline-sync");

let n = readlineSync.question('Veuillez entré un chiffre svp ');


    function factorial(num) {
        if (num === 0 || num === 1)
          return 1;
        for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }
        return num;
      }

console.log(factorial(n));
