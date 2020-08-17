// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    let tar = document.getElementById('target');
    let value1 = parseInt(document.getElementById('part-one').value);
    let value2 = parseInt(document.getElementById('part-two').value);
    let value3 = parseInt(document.getElementById('part-three').value);
    let value4 = parseInt(document.getElementById('part-four').value);
    let result1 = 0;

    document.getElementById("part-one").addEventListener('click', ()=>{
        let i = 0;
        i++;
        value1 = isNaN(value1) ? 460 : value1;
        value1 += i;
        document.getElementById('part-one').innerHTML = value1;
        return tar.innerHTML = "0"+value1 ;
        
        
    })
    document.getElementById("part-two").addEventListener('click', ()=>{
        let i = 0;
        i++;
        value2 = isNaN(value2) ? 0: value2;
        value2 += i;
        document.getElementById('part-two').innerHTML = value2;
        tar.innerHTML + value2;
        return tar.innerHTML = "0"+value1+value2 ;
    })
    document.getElementById("part-three").addEventListener('click', ()=>{
        let i = 0;
        i++;
        value3 = isNaN(value3) ? 0 : value3;
        value3 += i;
        document.getElementById('part-three').innerHTML = value3;
        return tar.innerHTML = "0"+value1+value2+value3 ;
    })
    document.getElementById("part-four").addEventListener('click', ()=>{
        let i = 0;
        i++;
        value4 = isNaN(value4) ? 0 : value4;
        value4 += i;
        document.getElementById('part-four').innerHTML = value4;
        return tar.innerHTML = "0"+value1+value2+value3+value4 ;
    })

;

})();


/*value1 = isNaN(value1) ? 0 : value1;
        value1++;
        document.getElementById('part-one').value = value1;
        console.log(value1);  */