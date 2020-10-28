// Creare 10 quadrati vuoti.
// Con jQuery, dentro ognuno scrivere un numero random

$(document).ready(function() {

    // per ogni quadrato:
    $('.quadrato').each(function() {
        // genero un numero random
        var numero_random = getRndInteger(1, 100);
        console.log(numero_random);
        // inserisco il numero all'interno del quadrato
        $(this).text(numero_random);
        console.log($(this));
    });

});

// funzione per generare un numero random tra min e max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
