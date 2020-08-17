// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    let run = document.getElementById('run');


    run.addEventListener('click',async function(){
        await window.lib.getPosts().then((post)=>{
            post.forEach((content) => {
                console.log(content.content);
            })
            
        })
    })
   
   
     
})();
