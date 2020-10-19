// Stampare a schermo una lista della spesa

var spesa = ['pane', 'latte', 'uova', 'caffè', 'zucchero'];

// per scorrere gli elementi di un array posso usare:
// sia un ciclo while
var i = 0;
while(i < spesa.length) {
    console.log(spesa[i]);
    i++;
}

 // sia un ciclo for
for (var i = 0; i < spesa.length; i++) {
    console.log(spesa[i]);
}
