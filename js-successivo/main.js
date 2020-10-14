// Chiedi un numero all’utente e stampa in console il numero successivo.

// chiedo un numero all'utente
var numero = parseInt(prompt('inserisci un numero'));
console.log("numero utente prima dell'incremento = " + numero);

// calcolo il numero successivo al numero inserito dall'utente
// prima devo incrementare la variabile e poi assegnare il valore! (pre-posizione)
var numero_sucessivo = ++numero;

// stampo in console il numero calcolato
console.log("numero utente dopo l'incremento = " + numero);
console.log("numero successivo = " + numero_sucessivo);
