// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    let regex = /^[a-zA-Z0-9_]{8,8}$/;
    let i = 0;
    document.getElementById("pass-one").addEventListener('keyup',()=>{
        ++i;
        document.getElementById("pass-one").setAttribute("maxlength", 8);
        if(i === 8 ){
            i--;    
        if(document.getElementById('pass-one').value.match(regex) ){
            document.getElementById('validity').innerHTML = "Ok";
            
        }   
        else{
            document.getElementById('validity').innerHTML = "not ok";          
        }
    }
    })
})();
