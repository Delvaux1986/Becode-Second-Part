// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    function random100(){
        return parseInt(Math.random() * (100 - 0) + 1);
    }

    let run = document.getElementById("run");
    run.addEventListener('click', function(){
        let tab = [];
        let ids = ["n-1" ,"n-2","n-3","n-4","n-5","n-6" ,"n-7","n-8","n-9","n-10"];
        for(let i = 0; i<10; i++){
           tab.push(random100());   
        }
        for(let a = 0; a < tab.length; a++){
            document.getElementById(ids[a]).innerHTML = tab[a];
        }
        
        document.getElementById("max").innerHTML = Math.max.apply(null, tab);
        document.getElementById("min").innerHTML = Math.min.apply(null,tab);
        document.getElementById("average").innerHTML = eval(tab.join('+'))/tab.length;
        document.getElementById("sum").innerHTML = eval(tab.join('+'))

    
    })
    
})();
