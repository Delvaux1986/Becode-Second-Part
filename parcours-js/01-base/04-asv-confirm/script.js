
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    let age = prompt('Whats your age ?');
    let gender = prompt('Whats your gender ?');
    let city = prompt('In which city do you live in ?');

    let answer = prompt('Hello, are you a ' + gender + ' ? are you ' + age + 'old ? En You live in ? ' +city );

    if(answer === "yes"){
        alert('ok then your informations its correct .');
    }else{
        let age = prompt('OK so whats your age ?');
        let gender = prompt('En whats your gender plz ?');
        let city = prompt('Your city was wrong too.In which city do you live ?');

        alert('So you hav ' + age + 'you are a ' + gender + ' & you live in ' +city);

    }
})();
