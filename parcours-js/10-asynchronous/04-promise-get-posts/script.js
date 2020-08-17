// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    let run = document.getElementById('run');


    run.addEventListener('click', ()=>{
        window.lib.getPosts().then((post)=>{
            post.forEach((content) => {
                console.log(content.content);
            })
            
        })
    })
})();   
     
     
     
 
    
    

