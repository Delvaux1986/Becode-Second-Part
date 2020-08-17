let a1 = 3, a2 = 4; // X
let b1 = 7, b2 = 9; // Y


function calcDistance(x2,x1,y2,y1){
    let result = (((x2-x1)*(x2-x1))) + ((y2-y1)*(y2-y1));  // formule SQRT from (x2-x1)*2+(y2-y1)*2 
    let resultFinal = Math.sqrt(result);
    return  resultFinal ;
    
}

console.log(calcDistance(a2,a1,b2,b1));

