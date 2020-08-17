
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    

    function today(){
        let tabDay = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
        let tabMonth = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "october" , "November" , "December"];
        
        let d = new Date();
        let day = tabDay[d.getDay()-1];
        let date = d.getDate();
        let month = tabMonth[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        let min = d.getMinutes();

        document.getElementById("target").innerHTML = "Nous sommes le : " + day +" "+ date +" "+ month +" "+ year + " , " +hour+ "h"+ min; 
    }
    today();
    



})();
