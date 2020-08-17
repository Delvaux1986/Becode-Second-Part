// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    run.addEventListener('click', async()=>{
        const person = await window.lib.getPosts();
            person.forEach(async ()=>{
                const com = await window.lib.getComments(person.id);
                        
                    
                })
            })
            console.log(com);
        
        
    
})();
