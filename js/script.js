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

let lettersArray = [];

for ( let i = (exampleStringTrimmedAndLowed.length - 1 ) ; i > -1 ; i--) {
    lettersArray.push(exampleStringTrimmedAndLowed.charAt(i));
}

console.log(lettersArray);

let exampleCreatedString = '';

for ( i = 0 ; i < lettersArray.length ; i++) {
    exampleCreatedString += lettersArray[i];
}

console.log(exampleCreatedString);

console.log(exampleCreatedString == exampleStringTrimmedAndLowed);
