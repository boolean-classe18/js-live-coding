// chiedo all'utente di inserire un numero finché questo non è pari

// con un cilo do-while
// posso dichiarare la variabile senza assegnare un valore
// perché il numero viene chiesto subito all'utente e il test viene eseguito alla fine
var numero;
do {
    numero = parseInt(prompt('inserisci un numero'));
} while (numero % 2 != 0);
console.log('numero pari inserito = ' + numero);

// con un ciclo while
// devo dare un valore iniziale al numero perché il test viene eseguito subito!
var numero = 1;
while (numero % 2 != 0) {
    numero = parseInt(prompt('inserisci un numero'));
}
console.log('numero pari inserito = ' + numero);
