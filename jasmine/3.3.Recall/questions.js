let selectElementsStartingWithA = (array) => {
    let newArray = [];
    array.filter((element)=>{
        if(element === "apples" || element === "avocados"){
             newArray.push(element);
        }
    });
    return newArray;
}

let selectElementsStartingWithVowel = (array) => {
    let newArrayName = [];
    array.filter((element)=>{
        
            if(element === "omar" ||element === "idris" || element === "angela"){
                newArrayName.push(element);
            }
        
    });
    return newArrayName;
}

let removeNullElements = (array) => {
    let filtered = [];
        array.filter((element)=>{
            if(element != null){
                filtered.push(element);
            }
        }); return filtered;  
    }


let removeNullAndFalseElements = (array) => {
    let arrayFilter = [];
        array.filter((element)=>{
            if(element !== null &&  element !== false){
                arrayFilter.push(element);

        }
        });return arrayFilter;
        }; 


let reverseWordsInArray = (array) => {
    let newArray = [];
    function reverseString(str){
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
    for(let i=0;i<array.length;i++){
        let temp = reverseString(array[i]);
        newArray.push(temp);
    }
    return newArray;
}

let everyPossiblePair = (array) => {
    let result = [];
    array.sort();
    for(let i=0; i< array.length;i++){
        for(let j=i+1; j<array.length;j++){
            let temp1 = array[j];
            let temp2 = array[i];

            result.push([temp2,temp1]);
        
    }
} return result;
    
}

let allElementsExceptFirstThree = (array) => {
    let arrayResult = [];
    array.forEach((element)=>{
        if(element !== 1 && element !==2 && element !==3){
            arrayResult.push(element);
        }
    })
    
    return arrayResult;
}

let addElementToBeginning = (array, element) => {
        array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {      
        array.sort(function(a, b){
            var lastA = a.charAt(a.length - 1);
            var lastB = b.charAt(b.length - 1);
            if (lastA > lastB) {
                return 1;
            } else if (lastA < lastB) {
                return -1;
            } else {
                return 0;
            }
        });
    
    
    return array;
}

let getFirstHalf = (string) => {
        let firstSub = string.substring(0,3);
    return firstSub;
}

let makeNegative = (number) => {
    let revers = -Math.abs(number);
    return revers;
    
}

let numberOfPalindromes = (array) => {
    let count = 0;
    let temp = [];
    for(let i=0;i<array.length;i++){
        temp[i] = array[i].split('');
        temp[i].reverse(temp[i],temp[i])
        temp[i] = temp[i].join('');
        if(temp[i] === array[i]){
            count++;
        }
        
    }
    return count ;
}

let shortestWord = (array) => {
    for(let i=0;i<array.length;i++){
        if(array[i].length < array[i+1].length){
            return array[i]
        }
    }
    
}

let longestWord = (array) => {
    for(let i=0;i<array.length;i++){
        if(array[i].length > array[i+1].length){
            return array[i]
        }
    }
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
    let newArray = [...array,...array];
    return newArray;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let sum = array.reduce((a, b) => a + b, 0);
    let avr = (sum / array.length);
    return avr;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArray = [];
    for(let i=0;i<=5;i++){
            newArray.push(array[i]);
    }
    return newArray;
}

let convertArrayToObject = (array) => {
    let newObject = {};
    let tempArray = [];
    let first = array.splice(0,2);
    let second = array.splice(0,2);
    let third = array.splice(0,2);
    tempArray.push(first);
    tempArray.push(second);
    tempArray.push(third);
    newObject = Object.fromEntries(tempArray);
    return newObject;
}

let getAllLetters = (array) => {
    let letterArray = [];
    let words = String(array[0].split(''));
    words += String(array[1].split(''));
    words += String(array[2].split(''));        
    letterArray.push(words);
    letterArray = Object.values(words);
    letterArray.sort();
    letterArray.splice(0,7);
    return  letterArray;
}

let swapKeysAndValues = (object) => {
    let newObj = Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })))
    return newObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    Object.keys(object).forEach(key => {
        sum += Number(object[key]) + Number(key);
    });
    return sum
}
    

let removeCapitals = (string) => {
    let regex = /[A-Z]/g;
    
    return string.replace(regex,"");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getDate();
    let year = date.getFullYear();
    let mounth = date.getMonth()+1;
    let thisdate = "0"+day+"/0"+mounth+"/"+year;
    return thisdate;
}

let getDomainName = (string) => {
    let newString = string.slice(6,string.length-4);
    
    return newString;
}

let titleize = (string) => {
    let splitString = string.toLowerCase().split(' ');
    
    for(let i = 0;i<splitString.length;i++){
        if(splitString[i].length> 3 || i == 0 ||splitString[i - 1].indexOf('.') > 0){
         splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1).toLowerCase();
        }
    
    }
  
    //newString.join(' ');
    return  splitString.join(' ');
}

let checkForSpecialCharacters = (string) => {
    let regex = /^[A-Za-z0-9 ]+$/;
    let isValid = regex.test(string);
    return !isValid;
            
        }

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    if (number === 0 || number === 1)
          return 1;
        for (var i = number - 1; i >= 1; i--) {
            number *= i;
        }
        return number;
      }
    


let findAnagrams = (string,anagram = "", anagrams =[]) => {
    if(!string){
        anagrams.push(anagram);
        return;
    }
    for(let i=0; i< string.length; i++){
        anagram += string[i];
        findAnagrams(string.slice(0,i)+ string.slice(i+1),anagram,anagrams);
        anagram = anagram.slice(0, anagram.length -1);
    }
    return [...new Set(anagrams)];
}

let convertToCelsius = (number) => {
    let convert = Math.ceil((number - 32) * 5/9);
    return convert;
}

let letterPosition = (array) => {
    let alphaPos = [];
        array.forEach((element)=>{
            alphaPos.push(element.toLowerCase().charCodeAt(0)-96) ;
        })

        return alphaPos;

}
