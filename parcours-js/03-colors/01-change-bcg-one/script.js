
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

   let red = document.getElementById('red');
   red.addEventListener('click', function(){document.body.style.backgroundColor = "red"});
   
   let green = document.getElementById('green');
   green.addEventListener('click', function(){document.body.style.backgroundColor = "green"});

   let yellow = document.getElementById('yellow');
   yellow.addEventListener('click', function(){document.body.style.backgroundColor = "yellow"});

   let blue = document.getElementById('blue');
   blue.addEventListener('click', function(){document.body.style.backgroundColor = "blue"});

})();
