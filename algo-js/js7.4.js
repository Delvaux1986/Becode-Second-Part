const readlineSync = require("readline-sync");
let pizzaList = []; 



console.log('Hello! Welcome to the Pizza Flavors Manager.'
            ,'\nPlease choose your actions:'
            ,'\n'
            ,'\n1 - List all the pizza flavors'
            ,'\n2 - Add a new pizza flavor'
            ,'\n3 - Remove a pizza flavor'
            ,'\n4 - Exit this program');

ask = parseInt(readlineSync.questionInt('Enter your action\'s number:'));

switch(ask){
    case 1 : console.log(pizzaList);
    break;
    case 2 : 
    break;
    case 3 : 
    break;
    case 4 : 
    break;
}
