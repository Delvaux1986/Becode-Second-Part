// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    let run = document.getElementById("run");
    run.addEventListener('click',function(){
        console.log ("Avons nous une Pommes : " +fruits.includes('apple'));
        
    })

})();
