// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {
    let count = 0;
    let run = document.getElementById('increment');
    
    
    run.addEventListener('click',()=>{
        let count = localStorage.getItem('count');
        count++;
        parseInt(localStorage.setItem('count', count));
        document.getElementById('target').innerHTML = localStorage.getItem('count')+ " ceci est la valeur stocké dans localStorage";

    })

})();
