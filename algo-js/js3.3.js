let array = [1,2,3,4,5,6,7,8,9,10];  // array d'origine
/*
let arrtwo = array.slice();  // Copie l'array dans arrtwo

    console.log(arrtwo); */

    //bonus

let arrayBonusOne = [];

arrayBonusOne.push.apply(arrayBonusOne,array); // copie avec le push

console.log("ce qu'il y a dans l'array Bonus One : " +arrayBonusOne+
            "\n Le type de array Bonus One " ,typeof+arrayBonusOne); // result ok

            