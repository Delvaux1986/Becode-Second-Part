// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {
    let fact = 1;
    let tar = document.getElementById('target');
    let calc = "";
    let table = tar.appendChild(document.createElement('table'));
     
    for(let i = 0 ; i < 10;i++){
         let td = table.appendChild(document.createElement("td"));
            for(let j =1 ; j < 11 ;j++){
                calc = +[j]+" x "+ fact+"  = "+[j] * fact;
                let tr = td.appendChild(document.createElement("tr"));   
                tr.appendChild(document.createTextNode(calc));
            
            }
            fact++;
    }

})();
