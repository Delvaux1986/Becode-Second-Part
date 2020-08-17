const readlineSync = require("readline-sync");

let Ask = new Number(readlineSync.question("What's your favorite number ?"));

while (Ask != 42){
    console.log(`${+Ask}Is not the good one try again ;)`);
    Ask = new Number(readlineSync.question("What's your favorite number ?"));
}