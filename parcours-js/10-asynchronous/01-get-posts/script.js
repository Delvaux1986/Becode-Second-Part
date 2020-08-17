// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    let run = document.getElementById('run');

    
    run.addEventListener('click',()=>{
    window.lib.getPosts((Error,array)=>{
        array.forEach(()=>{
            
        })
        console.log(array)
    })
    });


    
        
    
})();
