// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    fruits.pop();
    fruits.shift();
    fruits.push('kiwi');
    fruits.unshift('banana');

    let run = document.getElementById("run");
    run.addEventListener('click',function(){
        document.getElementById('target').innerHTML = fruits;
    })


})();
