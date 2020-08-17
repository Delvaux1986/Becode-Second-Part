// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    let run = document.getElementById('run');

    run.addEventListener('click',async()=>{
        fetch("http://localhost:3000/heroes/")
        .then((heroes)=>heroes.json())
        
        .then((name)=>{
            document.getElementById('tpl-hero').innerHTML = name;
        })

            
                
                          
            
        })
        
    
})();
