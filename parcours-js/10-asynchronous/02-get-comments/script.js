// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    let run = document.getElementById('run');

    run.addEventListener('click',()=>{
        window.lib.getComments("id",(Error,array)=>{
            array.forEach((tab)=>{
                console.log(tab.content);
            })
        })
    })
})();
