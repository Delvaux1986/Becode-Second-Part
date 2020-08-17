//07-classes/02-methods/script.js - 7.2: methods


(() => {
    
        class Ppl {
            constructor(lastname, firstname) {
                this.lastname = lastname;
                this.firstname = firstname;
            }
            Hello(){
                return "Hello " + this.lastname +" "+this.firstname; 
            }
        }


    
    document.getElementById("run").addEventListener('click', () =>{
        
        console.log(user.Hello());
})
    let user = new Ppl("Delvaux","Robby");
        
})();
