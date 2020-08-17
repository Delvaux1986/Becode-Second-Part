
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    

    document.getElementById("run").addEventListener("click", () => {
        let chiffre = document.getElementById('number').value;
        function factorialize(num) {
            let result = num;
            if (num === 0 || num === 1) 
              return 1; 
            while (num > 1) { 
              num--;
              result *= num;
            }
            return result;
          }
          
          alert(factorialize(chiffre));

    });

})();
