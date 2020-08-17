// mes Vars
let result1 ="";







let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let concat = texte1+texte2;
    return concat;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    
    for(let i = 0; i <=8;i++){
        result1 += texte[i]
        
    } return result1;
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    
    return texte.slice(1,texte.length-1);
}
let IsString =  (texte) => {
    return  Object.is("string","string");
}

let AfficherExtensionString =  (texte) => {
    let extension = texte.split('.').pop();
    return extension;
}
let NombreEspaceString =  (texte) => {
    nbesp = texte.split(' ').length - 1;
    return nbesp;
}
let InverseString =  (texte) => {
    let splitString = texte.split('');
    let reversArray = splitString.reverse();
    let newArray = reversArray.join('');
    return newArray;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let newArray = [];
    for(i = 0; i < array.length ; i++){
        newArray.push(Math.abs(array[i]));
    }
    return newArray;
}
let sufaceCercle =  (rayon) => {
   let result = Math.PI * (rayon * rayon);
   result = Math.round(result);
   return result;

     
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {
    let imc = poids / (taille * taille);
    let newImc = imc.toFixed(2);
    return Number(newImc);
}
