
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    

    document.getElementById("addition").addEventListener("click", function() {
        
    let a = parseInt(document.getElementById('op-one').value);
    let b = parseInt(document.getElementById('op-two').value);
        alert(a + b);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        
    let a = parseInt(document.getElementById('op-one').value);
    let b = parseInt(document.getElementById('op-two').value);
        alert(a - b);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
     
    let a = parseInt(document.getElementById('op-one').value);
    let b = parseInt(document.getElementById('op-two').value);   
        alert(a * b);
    });

    document.getElementById("division").addEventListener("click", function() {
        
    let a = parseInt(document.getElementById('op-one').value);
    let b = parseInt(document.getElementById('op-two').value);
        alert(a / b);
    });
})();
