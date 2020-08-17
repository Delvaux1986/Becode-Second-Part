

(() => {
        let run = document.getElementById('run');
        let listhero = [];
        let tar = document.getElementById('target');
        let template = document.getElementById('tpl-hero').content;

    run.addEventListener('click',()=>{
        listhero = fetch("http://localhost:3000/heroes/")
        .then((heroes)=>heroes.json())
        .then((superhero)=>{
            superhero.forEach((hero) =>{              
                var newDiv = document.createElement('div');
                var newTemp = document.importNode(template,true);
                newDiv.className = "tpl-hero";
                let heroname = document.createTextNode(hero.name);
                let alterego = document.createTextNode(hero.alterEgo);
                let abilities = document.createTextNode(hero.abilities[0]+ hero.abilities[1]);
                
                
                newTemp.appendChild(heroname);
                newTemp.appendChild(alterego);
                newTemp.appendChild(abilities);
                newDiv.appendChild(newTemp);
                
                
                
                tar.appendChild(newDiv);
                
            })
            
        })
    })

})();
