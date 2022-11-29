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
// ======================================== FUNZIONI ADDIZIONALI =========================================
// =======================================================================================================
// =======================================================================================================



// =======================================================================================================
// =======================================================================================================
// ======================================== SECONDA PARTE ================================================
// =======================================================================================================
// =======================================================================================================

// ^ funzione per generare un numero randomico entro due numeri limite minimo e massimo compresi
function randomNumWithMinMax (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    return randomNumber;
}

// % chiedo all'utente di scegliere pari o dispari, possibilmente con fare da gangster, cappello e cerino in bocca annessi
alert('Scegli! Pari o disapri?');

// % gli estorco la suddetta informazione tramite un prompt
let userOddOrEven = prompt('Inserisci la tua scelta');

// % torturo l'utente fino ad ottenere una sclta valida
while (userOddOrEven.toLowerCase() != 'pari' && userOddOrEven.toLowerCase() != 'dispari') {
    alert('Inserisci una scelta valida mascalzone!');
    userChosenNumber = parseInt(prompt('Inserisci la tua scelta: pari o dispari?'), 10);
}

// % reperisco anche il numero scelto dall'utente tra 1 e 5
    let userChosenNumber = parseInt(prompt('inserisci un numero da 1 a 5'), 10);

// % obbligo l'utente a darmi un numero tra 1 e 5
    while (userChosenNumber < 1 || userChosenNumber > 5) {
        alert('Inserisci un numero VALIDO da 1 a 5');
        userChosenNumber = parseInt(prompt('inserisci un numero da 1 a 5'), 10);
    }




// %
const randomComputersNumber = randomNumWithMinMax(1, 5);

console.log(userChosenNumber);
console.log(randomComputersNumber);

let numbersSum = randomComputersNumber + userChosenNumber;

console.log(numbersSum);

numbersSumOddOrEven = numbersSum

numbersSum % 2 == 0 ? numbersSumOddOrEven = 'pari' : numbersSumOddOrEven = 'dispari';

(numbersSumOddOrEven == userOddOrEven) ? alert('Complimenti! Hai vinto!!!') : alert('Hai perso! Ritenta, avrai più fortuna la prossima volta!!!');

