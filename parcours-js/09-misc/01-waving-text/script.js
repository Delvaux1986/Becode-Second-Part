// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    let tar = document.getElementById('target'); 
    let strText = tar.textContent;
    let longueur = tar.textContent.length; 
    let i = 0;
    let clafin = true;
    

    
    function change() {
      tar.innerHTML = strText.substring(0, i) + 
        '<span style="font-size:2rem" >' + strText.substring(i, i+1) + '</span>' + 
        '<span style="font-size:3rem">' + strText.substring(i+1, i+2) + '</span>' + 
        '<span style="font-size:4rem">' + strText.substring(i+2, i+3) + '</span>' + 
        '<span style="font-size:3rem">' + strText.substring(i+3, i+4) + '</span>' + 
        '<span style="font-size:2rem">' + strText.substring(i+4, i+5) + '</span>' +         
        strText.substring(i+6);
                                  
    }
    function move(){ 
        if(clafin === true){
          if( i <= longueur-5){
        console.log(strText);
        i++;
        change();
        
        }else{
          clafin = false;
        }
      }if(clafin === false){
        if(i >= -5){
         i--;
         console.log("moins UN");
          change(); 
        }
      }else{
        clafin = true;
      }
    }
    
  setInterval(move, 150);
})();