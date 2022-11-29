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

function customStringCleaner(yourString) {
    yourString = yourString.trim();
    yourString = yourString.replace(/\s/g, '');
    yourString = yourString.toLowerCase();
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    yourString = yourString.replace(regex, '');
    console.log('dopo pulizia da: punteggiatura, spazi vuoti e maiuscole');
    console.log(yourString);
    return yourString
}

let customExampleString = 'Questa é una prova Per vedere come funzionano le funzioni'

console.log(`questo é il risultato ${customExampleString}`);


customExampleString = customStringCleaner(customExampleString);

console.log(`questo é il risultato \" ${customExampleString} \"`);


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
alert('Scegli! Pari o dispari?');
let userOddOrEven = prompt('Inserisci la tua scelta');
userOddOrEven = customStringCleaner(userOddOrEven);

// % torturo l'utente fino ad ottenere una scelta valida
while (userOddOrEven != 'pari' && userOddOrEven != 'dispari') {
    alert('Inserisci una scelta valida mascalzone!');
    userOddOrEven = prompt('Inserisci la tua scelta: pari o dispari?');
    userOddOrEven = customStringCleaner(userOddOrEven);
}

// % reperisco anche il numero scelto dall'utente tra 1 e 5
    let userChosenNumber = parseInt(prompt('inserisci un numero da 1 a 5'), 10);

// % obbligo l'utente a darmi un numero tra 1 e 5 se non lo ha fatto fin dall'inizio di sua spontanea volontà
    while (userChosenNumber < 1 || userChosenNumber > 5) {
        alert('Inserisci un numero VALIDO da 1 a 5');
        userChosenNumber = parseInt(prompt('inserisci un numero da 1 a 5'), 10);
    }

// % genero un numero casuale per il computer compreso tra 1 e 5 attraverso la relativa funzione
const randomComputersNumber = randomNumWithMinMax(1, 5);

// % stampo in console i numeri ottenuti in questo modo
console.log(userChosenNumber);
console.log(randomComputersNumber);

// % faccio la somma dei numeri ottenuti in questo modo e la stampo in console
let numbersSum = randomComputersNumber + userChosenNumber;
console.log(numbersSum);

// % assegno alla variabile numbersSumOddOrEven il valore di numbersSum
numbersSumOddOrEven = numbersSum

// % verifico attraverso operatore modulo parità o disparità e assegno relativo valore stringa alla variabile numbersSumOddOrEven con operatore ternario
numbersSum % 2 == 0 ? numbersSumOddOrEven = 'pari' : numbersSumOddOrEven = 'dispari';

// % verifico con operatore ternario se la scelta dell'utente è stata vincente oppure no ed emetto relativo alert
(numbersSumOddOrEven == userOddOrEven) ? alert('Complimenti! Hai vinto!!!') : alert('Hai perso! Ritenta, avrai più fortuna la prossima volta!!!');

