// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    let run = document.getElementById("run");
    run.addEventListener('click',function(){
        let finalObject = {};
        
        for(let i = 0; i < keys.length;i++){
            finalObject += "  \n"+ keys[i] +" "+ values[i] +"\n";
        }
             
        console.log(finalObject); 
    })
    
})();
