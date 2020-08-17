// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    let tar = document.getElementById('target'); 
    let strText = tar.textContent; 
    let splitText = strText.split(""); 
    let position = 0;
    tar.textContent = "";

  
    let timer = setInterval(onTick,Math.random() * (100 - 0) + 1);
    
    function onTick(){ 
        const span = tar.querySelectorAll('span'); 
        tar.innerHTML += "<span style='font-size:1.2em'>" + splitText[position] + "</span";
        position++ 
        if(position === splitText.length){ 
           complete(); 
            return; 
        } 
        function complete(){ 
            clearInterval(timer); 
            timer=null; 

        }  
        } 
      

})();
