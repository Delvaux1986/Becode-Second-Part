// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    let target = document.getElementById('target');
    let number = Math.floor(Math.random()*(100 - 0) + 1);
    let count = 1;
    
    
    function guessGame(){
        console.log(number); 
        let guess = prompt("trouvez le bon nombre entre 1 et 100 :");
        while(guess != number){
            if(guess < number){
                count ++;
                guess = parseInt(prompt('Your number its too low try again plz'));
                 
            }if(guess > number){
                guess = parseInt(prompt('Your number its too high try again plz'));
                count++;
            }if (guess == number){
                target.innerHTML += "Bravo vous avez trouver en " +count+ " essais";
            }
        }
    }

    guessGame();

})();
