console.log('Hello World!');

let exampleString = 'I topi, non avevano nipoti';

console.log(exampleString)


// per togliere tutti gli spazi vuoti
exampleStringTrimmed = exampleString.trim();
exampleStringTrimmed = exampleStringTrimmed.replace(/\s/g, '')
console.log('dopo il trim degli spazi vuoti')
console.log(exampleStringTrimmed)



// per togliere tutta la punteggiatura


const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
exampleStringTrimmed = exampleStringTrimmed.replace(regex, '');
console.log(exampleStringTrimmed)

// per rendere tutte le lettere minuscole

exampleStringTrimmedAndLowed = exampleStringTrimmed
exampleStringTrimmedAndLowed = exampleStringTrimmedAndLowed.toLowerCase()
console.log(exampleStringTrimmedAndLowed)