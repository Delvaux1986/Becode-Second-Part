//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
 

    
    let run = document.getElementById("run");
    run.addEventListener("click", function(){
        computers.forEach(function(element){
        if(element.available === undefined){
                element.available = defaultProps.available;
        }if(element.user === undefined){
                element.user = defaultProps.user;
        }if(element.os === undefined){
                element.os = defaultProps.os;
        }
        })
          
            
        
        console.log(computers);
    })
    
})();
