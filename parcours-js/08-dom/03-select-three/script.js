
// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {
    for(let i= 0; i < 5; i++){
    document.getElementsByClassName('target')[i].innerHTML = "owned";
}
})();
