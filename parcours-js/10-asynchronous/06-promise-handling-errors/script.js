// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    run.addEventListener('click', ()=>{
        window.lib.getPersons().then((post)=>{
            post.forEach((Error ,content) => {
                
            })
            console.log(post);
            console.error(Error);
            
        })
    })
})();
