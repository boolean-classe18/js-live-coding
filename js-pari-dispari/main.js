// chiedo un numero all'utente
var numero = parseInt(prompt('inserisci un numero')); // 5

console.log(numero);

// 5 modulo 2 = 1
// 7 modulo 2 = 1
// 13 modulo 2 = 1
// 50 modulo 2 = 0

// calcolo il modulo 2, ossia il resto della divisione per 2
var resto = numero % 2;
console.log(resto);

// verifico se il numero è pari, ossia se è divisibile per 2, ossia se il resto è 0
if(resto == 0) {
    // il resto della divisione per 2 è uguale a 0 => il numero è pari!
    // comunico all'utente che il numero scelto è pari
    console.log('Il numero è pari');
} else {// il resto della divisione per 2 NON è uguale a 0 => il numero è dispari!
    // comunico all'utente che il numero scelto è dispari
    console.log('Il numero è dispari');
}
