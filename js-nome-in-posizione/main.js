// Crea un array contenente 3 nomi.
// Chiedi un numero da 0 a 2 all’utente e stampa l’elemento dell’array corrispondente

// creo un array di 3 elementi
var nomi = ['Pippo', 'Pluto', 'Paperino'];
console.log(nomi);

// chiedo un numero all'utente compresto tra 0 e 2
var numero = parseInt(prompt('Inserisci un numero tra 0 e 2'));
console.log(numero);

// mi assicuro che il numero inserito dall'utente sia un numero valido, ossia
// - che sia un numero intero
// - che sia maggiore o uguale a 0
// - che sia minore o uguale a 2
if(isNaN(numero) == false && numero >= 0 && numero <= 2) {
    console.log('numero valido');
    // stampo il nome corrispondente alla posizione indicata dall'utente
    console.log(nomi[numero]);
} else {
    console.log('numero non valido');
}
