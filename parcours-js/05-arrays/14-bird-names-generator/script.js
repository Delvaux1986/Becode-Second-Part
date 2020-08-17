// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

   

    let run = document.getElementById("run");
    run.addEventListener("click", function(){
        let adjArray = Array.from(adjectives);
        let randomBirds = birds[Math.floor(Math.random() * birds.length)];
        let randomAdjectif = adjArray[Math.floor(Math.random() * adjArray.length)];
        if(randomBirds.fem === true){
            document.getElementById("target").innerHTML = "La "+randomBirds.name+" " +randomAdjectif+"e";
        }else{
            document.getElementById("target").innerHTML = "Le "+randomBirds.name+" " +randomAdjectif;
        }
        
    })
})();
