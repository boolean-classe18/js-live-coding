// Crea un array di numeri e stampa solo i numeri dispari
var numeri = [4, 5, 9, 10, -1];
console.log(numeri);

for (var i = 0; i < numeri.length; i++) {
    // recupero il numero corrente di questa iterazione
    var numero_corrente = numeri[i];
    // verifico se il numero corrente è dispari
    var resto = numero_corrente % 2; // es: 4 % 2 = 4 modulo 2 = 4/2 e prendi il resto! = 0
    if(resto != 0) {
        console.log(numero_corrente);
    }
}
