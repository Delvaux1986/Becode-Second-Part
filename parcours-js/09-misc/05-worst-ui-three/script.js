// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    let tar = document.getElementById('target');
    let first = document.getElementById('fix-part-one');
    let two = document.getElementById('fix-part-two');
    let three = document.getElementById('fix-part-three');
    let four = document.getElementById('fix-part-four');

    first.addEventListener('click', ()=>{
        let rand1 = parseInt(Math.random() * (499 - 460) + 460);
        
       tar.innerHTML = "0"+rand1;
    })
    two.addEventListener('click', ()=>{
        let rand2 = parseInt(Math.random() * (100 - 0) + 1);
        
        tar.innerHTML += rand2;
    })
    three.addEventListener('click', ()=>{
        let rand3 = parseInt(Math.random() * (100 - 0) + 1);
        
        tar.innerHTML += rand3;
    })
    four.addEventListener('click', ()=>{
        let rand4 = parseInt(Math.random() * (100 - 0) + 1);
        
        tar.innerHTML += rand4;
    })
})();
