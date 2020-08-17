const readlineSync = require("readline-sync");

let question = "Introduisez un chiffre entre 1 et 7 svp :";
let ask = readlineSync.question(question);
    ask = parseInt(ask);


    switch(ask){
        case 1 : console.log("Monday we are ");
        break;
        case 2 : console.log("Tuesday we are ");
        break;
        case 3 : console.log("Wednesday we are ");
        break;
        case 4 : console.log("Tuesday we are ");
        break;
        case 5 : console.log("Friday we are ");
        break;
        case 6 : console.log("Saturday we are ");
        break;
        case 7 : console.log("Sunday we are ");
        break;
        default:console.log("Not a good number !!!");
        break;
        }
    
