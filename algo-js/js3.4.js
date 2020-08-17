let array = [1,2,3,10,100,22,33,55];

/*for(let i = 0; i<= array.length ; i++){
        let min = parseInt(Math.min(array[i]));
        let max = parseInt(Math.max(array[i]));
}*/


let max = Math.max.apply(null,array);
let min = Math.min.apply(null,array);

console.log("le plus petit nombre du tableau est : " +min+
            "\n Le plus gros nombre du tableau est :" +max);