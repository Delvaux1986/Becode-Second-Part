const readlineSync = require("readline-sync");

let name = readlineSync.question('Quel est votre serie préféré : ');            // on pose les questions ici
let product = readlineSync.question('En quel année est apparue cette serie :');
let actors1 = readlineSync.question('Quel acteurs joue dans cette serie :');
let actors2 = readlineSync.question('Et ? :');
let actors3 = readlineSync.question('Mais encore ? :');
let actors4 = readlineSync.question('Et le dernier ? :');
let actorslist = [actors1,actors2,actors3,actors4]; // on cree le tableau des acteurs 


    function askTvSerie(showName,year,listactors){ //creation de l'objet
        let Tvserie = {
            'Name of the show' : showName ,
            'Year of product ' : year ,
            'Actor from this show ' : [listactors]
            }
        }
    function randomizeCast(a){
        for(let i = a.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = a[i]
            a[i] = a[j]
            a[j] = temp
          }
          return a
        }
askTvSerie(name,product,actorslist);



console.log("List dans l'ordre :" + actorslist +
            "\n et Random contient :" + randomizeCast(actorslist));
   