// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    let i = 0;
    
    document.getElementById("pass-one").addEventListener('keyup',()=>{
        ++i;
        document.getElementById("pass-one").setAttribute("maxlength", 10);
        document.getElementById('counter').innerHTML =  i +"/10";
        if(i === 10){
            i--;
        }
        
    })

    

})();
