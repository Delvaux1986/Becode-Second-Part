// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    let run = document.getElementById("run");
    run.addEventListener('click', function(){
        
                fruits.delete("apple");
                fruits.delete("cerise");
                fruits.add("kiwi");
                fruits.add("banana");
                console.log(fruits);
    })
})();
