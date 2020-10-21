// Genero 10 numeri random utilizzando una funzione

// funzione che genera un numero random compreso tra min e max
// riceve in input il limite inferiore (min) e il limite superiore (max)
// restituisce il numero generato
function getRandomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

// funzione che genera N numeri random, dove N è espresso nel parametro "quantita"
// riceve in input la quantità di numeri da generare e il limite inferiore e il limite superiore
// restituisce un array con gli N numeri random generati
function getRandomNumbers(quantita, min, max) {
    var numeri = [];
    for (var i = 0; i < quantita; i++) {
        var numero_random = getRandomNumber(min, max);
        numeri.push(numero_random);
    }
    return numeri;
}

// invoco la funzione per ottenere 100 numeri random compresi tra 1 e 1000
var numeri_random = getRandomNumbers(100, 1, 1000);
console.log(numeri_random);
