console.log('Hello World!');

const askForUserText = prompt('Inserisci un testo e vediamo se è un palindromo:')

let exampleString = askForUserText;

console.log(exampleString);



// per togliere tutti gli spazi vuoti

exampleStringTrimmed = exampleString.trim();
exampleStringTrimmed = exampleStringTrimmed.replace(/\s/g, '');
console.log('dopo il trim degli spazi vuoti');
console.log(exampleStringTrimmed);

// per togliere tutta la punteggiatura

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
exampleStringTrimmed = exampleStringTrimmed.replace(regex, '');
console.log('dopo il trim della punteggiatura');
console.log(exampleStringTrimmed);

// per rendere tutte le lettere minuscole

exampleStringTrimmedAndLowed = exampleStringTrimmed.toLowerCase();
console.log('dopo aver reso tutte le lettere minuscole');
console.log(exampleStringTrimmedAndLowed);

// per ribaltare la parola
let exampleReversedString = '';

for ( let i = (exampleStringTrimmedAndLowed.length - 1 ) ; i > -1 ; i--) {
    exampleReversedString += (exampleStringTrimmedAndLowed[i]);
}

console.log(exampleReversedString);

console.log(exampleReversedString == exampleStringTrimmedAndLowed);

// =======================================================================================================
// =======================================================================================================
// ======================================== SECONDA PARTE ================================================
// =======================================================================================================
// =======================================================================================================

function randomNumWithMinMax (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    return randomNumber;
}

let userWarning = alert('Scegli! Pari o disapri?');
const userOddOrEven = prompt('Inserisci la tua scelta');
const userChosenNumber = prompt('inserisci un numero da 1 a 5');
let randomComputersNumber = (randomNumWithMinMax(1, 5));
