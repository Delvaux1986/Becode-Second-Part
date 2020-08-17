// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {
    
    


    document.getElementById('run').addEventListener('click', ()=>{
        
        
        if(document.getElementById("pass-one").value !== 
            document.getElementById("pass-two").value){
                
                document.getElementById('pass-one').value = "Don't Match";
                document.getElementById('pass-two').value = "Don't Match";
        }else{
                
                document.getElementById('pass-one').value = "Match";
                document.getElementById('pass-two').value = "Match";
        }
    })

})();
