// genero 5 numeri random compresi tra 1 e 10 tutti diversi tra loro
var numeri = [];

// con il ciclo while ripeto finché non ci sono 5 elementi nell'array
while(numeri.length < 5) {

// con il ciclo for ripeto 5 volte
// N.B.: possono esserci meno di 5 elementi nell'array alla fine del ciclo!!
// for (var i = 0; i < 5; i++) {

    // genero un numero random da 1 a 10
    var numero_random = Math.floor(Math.random() * 10) + 1;
    console.log(numero_random);

    // verifico se il numero random generato compare già nell'array:

    // soluzione A: con un ciclo for, verifico "manualmente" se l'elemento è presente
    // // definisco una variabile che mi dice se l'elemento esiste nell'array
    // var presente = false;
    // // scorro tutti gli elementi dell'array numeri
    // for (var j = 0; j < numeri.length; j++) {
    //     // verifico se il numero corrente è uguale al numero random
    //     var numero_corrente = numeri[j];
    //     if(numero_corrente == numero_random) {
    //         // ho trovato il numero => il numero è già presente nell'array!
    //         presente = true;
    //     }
    // }
    // if(presente == false) {
    //     // solo se non è già presente lo inserisco nell'array
    //     numeri.push(numero_random);
    // }

    // soluzione B: con la funzione includes!
    if(!numeri.includes(numero_random)) {
        // solo se non è già presente lo inserisco nell'array
        numeri.push(numero_random);
    }

}

// alla fine del ciclo ho un array con dei numeri casuali tutti diversi!
// a seconda che utilizzi il ciclo for o il ciclo while, il numero di elementi cambia:
// con il ciclo while ho la certezza che alla fine ci saranno sempre 5 elementi
// con il ciclo for invece, potrebbero essercene di meno perché a qualche iterazione
// potrebbe essere stato generato un numero già presente, che quindi è stato scartato
console.log(numeri);
