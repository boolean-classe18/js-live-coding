/*
Esempio 1:
dichiarazione e utilizzo di una funzione con parametri e istruzione return
*/

var a = 5;
var b = 7;

// faccio la somma di due numeri
var somma = sommaNumeri(a, b);
console.log('La somma di ' + a + ' e ' + b + ' vale: ' + somma);

// verifico se il risultato della somma è pari
if(somma % 2 == 0) {
    console.log(somma + ' è un numero pari');
} else {
    console.log(somma  + ' è un numero dispari');
}

function sommaNumeri(num1, num2) {
    // alert(num1 + num2);
    var risultato = num1 + num2;
    // console.log(risultato);
    return risultato;
}

/********************************************/

/*
Esempio 2:
dichiarazione e utilizzo di una funzione senza istruzione return
*/

stampaNumero(2);

function stampaNumero(num) {
    console.log('stampo il numero dalla funzione: ' + num);
}

/********************************************/

/*
Esempio 3:
Creo una funzione che stabilisca se un numero è pari.
Creo un array di numeri e, con l'aiuto della funzione,
sommo separatamente i numeri pari e i numeri dispari
*/
var array = [3, 9, 4, 10, 7];
console.log('Array di numeri:');
console.log(array);

var somma_pari = 0;
var somma_dispari = 0;

for (var i = 0; i < array.length; i++) {
    var elemento_corrente = array[i];

    if(isEven(elemento_corrente)) {
        somma_pari += elemento_corrente;
    } else {
        somma_dispari += elemento_corrente;
    }
}

console.log("La somma dei numeri pari dell'array vale: " + somma_pari);
console.log("La somma dei numeri dispari dell'array vale: " + somma_dispari);

// funzione per stabilire se un numero è pari
// riceve in input il numero da valutare
// restituisce true, se il numero è pari, false altrimenti
function isEven(numero) {
    if(numero % 2 == 0) {
        // il numero è pari
        return true;
    } else {
        // il numero è dispari
        return false;
    }
}


// alternativa, funzione per stabilire se un numero è dispari
// riceve in input il numero da valutare
// restituisce true, se il numero è dispari, false altrimenti
function isOdd(number) {
    if(numer % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
