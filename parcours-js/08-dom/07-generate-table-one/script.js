// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    let tar = document.getElementById('target');
    
    let table = tar.appendChild(document.createElement('table'));
    for(let i = 0 ; i < 10;i++){
        
        table.appendChild(document.createElement("td"));
        
    }
    

})();
