
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    

    const performOperation = operation => {
        switch(operation){
            case 'addition' :  
                let a = parseInt(document.getElementById('op-one').value);
                let b = parseInt(document.getElementById('op-two').value);
                    alert(a+b);
            break;
            case 'substraction' : 
                let c = parseInt(document.getElementById('op-one').value);
                let d = parseInt(document.getElementById('op-two').value);
                    alert(c-d);  
            break;
            case 'multiplication' : 
                let e = parseInt(document.getElementById('op-one').value);
                let f = parseInt(document.getElementById('op-two').value);
                    alert(e * f);
            break;
            case 'division' : 
                let g = parseInt(document.getElementById('op-one').value);
                let h = parseInt(document.getElementById('op-two').value);
                    alert(g / h);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
