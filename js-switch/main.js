// Chiedere all’utente due numeri e quale operazione vuole eseguire.
// Stampare a schermo il risultato dell’operazione.

// chiedo all'utente 2 numeri
var numero1 = parseInt(prompt('Inserisci il primo numero'));
console.log(numero1);

var operazione = prompt('Quale operazione vuoi eseguire?');
console.log(operazione);

var numero2 = parseInt(prompt('Inserisci il secondo numero'));
console.log(numero2);

var risultato;
// valuto quale operazione vuole eseguire l'utente
switch (operazione) {
    case '+':
        risultato = numero1 + numero2;
        break;
    case '-':
        risultato = numero1 - numero2;
        break;
    case '*':
        risultato = numero1 * numero2;
        break;
    case '/':
        risultato = numero1 / numero2;
        break;
    default:
        console.log('operazione non riconosciuta');
        risultato = 'n.d.';
}

console.log('Il risultato di ' + numero1 + ' ' + operazione + ' ' + numero2 + ' vale ' + risultato);

// il costrutto switch è equivalente a un insieme di istruzioni if-else if
if(operazione == '+') {
    risultato = numero1 + numero2;
} else if (operazione == '-') {
    risultato = numero1 - numero2;
} else if(operazione == '*') {
    risultato = numero1 * numero2;
} else if(operazione == '/') {
    risultato = numero1 / numero2;
} else {
    console.log('operazione non riconosciuta');
    risultato = 'n.d.';
}

console.log('Il risultato di ' + numero1 + ' ' + operazione + ' ' + numero2 + ' vale ' + risultato);
