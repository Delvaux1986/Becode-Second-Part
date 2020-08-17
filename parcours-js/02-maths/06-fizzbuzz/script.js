
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    function check(n){
        if(n % 3 === 0 && n % 5 === 0 ){
            console.log(i+ " = fizzbuzz")
        }else if (n % 3 === 0){
            console.log(i+ " = fizz");
        }else if(n % 5 === 0){
            console.log(i+ " = buzz");
        }else{
            console.log(i+ " number is not divisible")
        }
    }
    let i = 1;
    for( i = 1 ; i <= 100; i++){
        check(i);
    }
    console.log(check(i));
})();
