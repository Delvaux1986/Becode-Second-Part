const readlineSync = require("readline-sync");


function guessGame(){
    number = Math.floor(Math.random()*(100 - 0) + 1);     // on choisit un chiffre entre 1 -100 
    let guess = readlineSync.question("trouvez le bon nombre :"); // on pause une premiere fois la question
        do {
            guess = readlineSync.question("Malheureusement ce n'est pas le bon chiffre recommencez ici svp "); // le do repose la question quand on tombe
            if (number < guess) {                                                                              // dans un des deux IF
                readlineSync.question("Trop haut !!!! ");
            } else if (number > guess) {
                readlineSync.question("Trop bas !!!!");
            } else console.log("Bien joué vous avez trouver");                                              // sinon on fini dans le Else si la reponse est just
        } while (guess != number);
}

console.log(guessGame());