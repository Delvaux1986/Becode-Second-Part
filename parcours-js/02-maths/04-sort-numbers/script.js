// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    

    document.getElementById("run").addEventListener("click", () => {
        let newtab = document.getElementById('numbers').value.split(",");
        newtab.sort((a, b) => a - b);
        
        alert(newtab);


    });

})();
