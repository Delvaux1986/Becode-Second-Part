// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    let run = document.getElementById("run");
    run.addEventListener('click', function(){
        for(let i = 0 ; i <= fruits.length; i++){
            console.log("Le tableau contient : " +fruits[i]);
        }
    })

})();
