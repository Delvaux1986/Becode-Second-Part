// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    let run = document.getElementById('run');


    run.addEventListener('click', ()=>{
        window.lib.getComments("id").then((post)=>{
            post.forEach((content) => {
                console.log(content.content);
            })
            
        })
    })
})();
