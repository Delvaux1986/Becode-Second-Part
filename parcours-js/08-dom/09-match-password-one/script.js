// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {  
    
    
    document.getElementById('run').addEventListener('click', ()=>{
        if(document.getElementById("pass-one").value !== 
            document.getElementById("pass-two").value){
                document.getElementById('pass-one').style.borderColor = "red";
                document.getElementById('pass-two').style.borderColor = "red";
                document.getElementById('target').innerHTML = "Don't Match";  
        }if(document.getElementById("pass-one").value === 
            document.getElementById("pass-two").value){

                document.getElementById('pass-one').style.borderColor = "green";
                document.getElementById('pass-two').style.borderColor = "green";
                document.getElementById('target').innerHTML = "Match";      
        }
    })
    

})();
