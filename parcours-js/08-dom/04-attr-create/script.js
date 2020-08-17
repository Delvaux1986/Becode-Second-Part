// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    let source = document.getElementById("source");
    let img = document.createElement("img");
    img.src = "http://www.randomkittengenerator.com/cats/rotator.php";
    source.appendChild(img);
    document.getElementById("target").appendChild(img);

})();
