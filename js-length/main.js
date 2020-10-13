// Inserisci due parole, quale è la piu lunga?
var parola1 = 'hello';
var parola2 = 'hola';

var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;

console.log('Lunghezza parola 1 = ' + lunghezza1);
console.log('Lunghezza parola 2 = ' + lunghezza2);

// prima soluzione
if(lunghezza1 > lunghezza2) {
    console.log('La parola 1 è più lunga della parola 2');
} else if(lunghezza1 == lunghezza2) {
    console.log('Le due parole hanno la stessa lunghezza');
} else {
    console.log('La parola 2 è più lunga della parola 1');
}

// seconda soluzione
// if(lunghezza1 > lunghezza2) {
//     console.log('La parola 1 è più lunga della parola 2');
// } else if(lunghezza2 > lunghezza1) {
//     console.log('La parola 2 è più lunga della parola 1');
// } else {
//     console.log('Le due parole hanno la stessa lunghezza');
// }

// posso innestare le if per aggiungere condizioni a cascata
if(lunghezza1 > lunghezza2) {
    // la parola 1 è più lunga di parola 2
    // è lunga più del doppio?
    if(lunghezza1 >= (lunghezza2 * 2)) {
        console.log('parola 1 è lunga più del doppio di parola 2');
    } else {
        console.log('parola 1 è più lunga di parola 2');
    }
}
