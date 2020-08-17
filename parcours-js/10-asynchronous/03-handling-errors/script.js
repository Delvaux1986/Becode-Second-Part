// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    let run = document.getElementById('run');
    
    run.addEventListener('click',()=>{
        window.lib.getPersons((Error,array)=>{
            array.forEach((tab)=>{
                console.log(tab.name);
                console.error(tab.name);
            })
            
        })
    })
})();
