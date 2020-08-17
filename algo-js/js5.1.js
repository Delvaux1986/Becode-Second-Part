const readlineSync = require("readline-sync");

let name = readlineSync.question('Quel est votre serie préféré : ');
let product = readlineSync.question('En quel année est apparue cette serie :');

function askTvSerie(showName,year){
    let Tvserie = {
        'Name of the show' : showName ,
        'Year of product ' : year ,
        'List of actors ' : [readlineSync.question('Quel acteurs joue dans cette serie :'),
                             readlineSync.question('Et ? :'),
                             readlineSync.question('Mais encore ? :'),
                             readlineSync.question('Et le dernier ? :')]
    }
    return Tvserie;
}


console.log(askTvSerie(name,product));
