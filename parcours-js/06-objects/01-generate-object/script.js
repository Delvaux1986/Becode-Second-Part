// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    let run = document.getElementById("run");
    run.addEventListener("click", function(){
        let ppl = {
                    lastname :"Delvaux",
                    firstname : "Robby",
                    Myage : 34,
                    city : "Charleroi",
                    country : "Belgium"
        }
        console.log(ppl)
    })
})();
