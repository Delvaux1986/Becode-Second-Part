
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    let run = document.getElementById("run");
    

    run.addEventListener('click', function(){
        let red = Math.random() * (255 - 0) + 1;
        let green = Math.random() * (255 - 0) + 1;
        let blue = Math.random() * (255 - 0) + 1;

        let randomBg = 'rgb(' + red + ',' + green + "," + blue + ")";

        document.body.style.backgroundColor = randomBg ;
    }
    )

})();
