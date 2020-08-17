// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    run.addEventListener('click', async()=>{
        const person = await window.lib.getPersons().then();
            try{
                person.forEach(pers=>{
                    console.log(pers)
                })
            }catch(error){
                console.error(error);
            }
    })
})();
