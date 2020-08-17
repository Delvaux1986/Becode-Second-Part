const readlineSync = require("readline-sync");

let age = readlineSync.question("how old are you ?");


if(age < 18){
    console.log("Vous etes majeur bien ...");
}else{
    console.log("Attention vous êtes mineur.");
}

let current = readlineSync.question("Give me a number plz ");
let min = readlineSync.question("Give me a number under the first number plz");
let max = readlineSync.question("Give me a number over the First number you give to me plz ");

if((current > min)&&(current < max)){
    console.log("Tous va bien c'est juste :D ");
}else(max < min);{
    console.log("Vous avez du vous trompez dans les chiffres entrés ");
};

let i = 1;

while(i<=100){
    console.log(i);
    i += 1;
}

for (let e = 1; e<= 50; e += 1){
    console.log(e);
}

for (let x = 1; x <= 100; x += 1){
    if(x%2 == 0){
        let mul = x*2;
        console.log("X est pair et multiplié par 2 :" +mul);
    }else{
        let div = x/3;
        console.log("X est Impair et divisé par 3 " +div);
    } 
}

