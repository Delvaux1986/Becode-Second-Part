//var global
let arrayLangages = [];
let arrayNumber = [];


let CreationTableauLangages =  () => {
    arrayLangages = ["Html","CSS","Java","PHP"];
    return arrayLangages;
}

let CreationTableauNombres =  () => {
    for(let i = 0; i <= 5;i++){
        arrayNumber.push(i);
    }return arrayNumber;
}

let RemplacementElement =  (langages) => {
    langages.splice(2,1,'Javascript');
    return langages; 

}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby');
    langages.push('Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-1);
    nombres.unshift(-2);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let newArray = reseaux_sociaux_chaine.split(',');
    return newArray;

}

let ConversionTableauChaine =  (langages) => {
    let string = "";
    for(let i=0; i< langages.length;i++){
        string += langages[i]+",";
    }
    let newString = string.substring(0, 23);
    return newString;
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
    return reseaux_sociaux.reverse();
}
