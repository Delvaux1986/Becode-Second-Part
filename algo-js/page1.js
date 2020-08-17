const readlineSync = require("readline-sync");

let userName = readlineSync.question("Question 1on6. -Whats your name ???");
let firstName = readlineSync.question("Question 2on6. -Do you had a Firstname ??:p");
let city = readlineSync.question("Question 3on6. -In wich city you living ???");
let hobby = readlineSync.question("Question 4on6. -What's your  favorite hobby's???");
let pet = readlineSync.question("Question 5on6. -Do you had a pet ?");
let drink = readlineSync.question("Question 6on6. -Do you Like coffee???");

console.log("Donc vous vous Apellez " +userName+ +firstName+ 
            "\nVous vivez a " +city+ "et votre Hobby est " +hobby+ 
            "\nVoter animal de compagnie est " +pet+ "et vous aimez le café ou pas ? " +drink );
