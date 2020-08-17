// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    let slider = document.getElementById('slider');

    slider.addEventListener('click',()=>{
        let tar = document.getElementById('target');
        let current = slider.value;
        tar.innerHTML = "0"+current;
    })

    


})();
