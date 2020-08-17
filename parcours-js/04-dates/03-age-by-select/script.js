
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
     /*let year = document.getElementById("dob-year").options[document.getElementById('dob-year').selectedIndex].text;*/   
    let today = new Date();
    let dateyear = today.getFullYear();
    let dateMonth = today.getMonth();
    let run = document.getElementById("run");

   
    run.addEventListener('click', function(){
        let selectedyear = document.getElementById("dob-year").value;
        let selectedMonth = document.getElementById("dob-month").value;
        let birthyear = dateyear - selectedyear;
            if(dateMonth <= selectedMonth){
                birthyear ;
                }else if(dateMonth > selectedMonth){
                        birthyear -=1;
                }
        
        
        document.getElementById("target").innerHTML =   birthyear; 

    })

})();
