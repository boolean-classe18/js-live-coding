/*

La funzione prompt() restituisce sempre una stringa!!

*/
// var numero1 = prompt('Inserisci un numero');
// var numero2 = prompt('Inserisci un numero');
//
// var somma = numero1 + numero2;
// console.log('La somma senza parseInt() è ' + somma);
//
// numero1 = parseInt(numero1);
// numero2 = parseInt(numero2);
// somma = numero1 + numero2;
// console.log('La somma con parseInt() è ' + somma);


var numero = prompt('Inserisci un numero');
console.log(numero); // la stringa è stampata in nero
console.log(parseInt(numero)); // il numer è stampato in blu


if(isNaN(numero) == false) { // equivalente a if(!isNaN(numero)) {
    console.log('è un numero');
    console.log(numero);
    var potenza = numero * numero;
    console.log(numero + ' alla seconda fa ' + potenza);
} else {
    console.log('NON è un numero');
}
