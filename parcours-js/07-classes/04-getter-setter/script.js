// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        get fullName(){
            return "Votre prenom et nom sont : "+this.firstname + " " + this.lastname ;

        }
        
        constructor(firstname,lastname){
            this.firstname = firstname ;
            this.lastname = lastname;   
        }
        set ChangeName(name){
            let names = name.toString().split(" ");
            this.firstname = names[0];
            this.lastname = names[1];
        }
    }
        
    

    let ppl = new Person("Robby","Delvaux");
    
    
    
    document.getElementById('run').addEventListener('click', ()=>{
        console.log(ppl.fullName);
        ppl.ChangeName = 'Philippe Moris';
        console.log(ppl.fullName);
    })

})();
