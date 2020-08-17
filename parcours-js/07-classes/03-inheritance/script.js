// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Chien extends Animal {
        static greeting = ' Waouffffff';
          
        constructor(name){
            super();
            this.name = name ;
        }
    
    }
    class Chat extends Animal {
        static greeting = ' Miaouuuuu';
        
        constructor(name){
            super();
            this.name = name ;
        }
        
    }

    let wouf = new Chien("Rantanplan");
    let miaow = new Chat('Garfield');
    document.getElementById('run').addEventListener('click',()=>{
        console.log(wouf.sayHello());
        console.log(miaow.sayHello());
    })
})();
