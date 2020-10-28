// Creare 10 quadrati vuoti con jQuery,
// poi associare una classe red ai quadrati in posizione pari
// e una classe green ai quadrati in posizione dispari.


$(document).ready(function() {

    // ripeto 10 volte:
    for (var i = 0; i < 10; i++) {
        // inserisco un nuovo quadrato nel container
        $('.container').append('<div class="quadrato"></div>');
        // $('<div class="quadrato"></div>').appendTo('.container');
    }

    // per ogni quadrato:
    $('.quadrato').each(function(posizione) {
        // recupero la posizione di questo quadrato
        // var posizione = $(this).index();
        posizione++;
        $(this).html('<span>quadrato numero: ' + posizione + '</span>');
        // valuto se il quadrato è in posizione pari o dispari
        if(posizione % 2 == 0) {
            // posizione pari => aggiungo classe red
            $(this).addClass('red');
        } else {
            // posizione dispari => aggiungo classe green
            $(this).addClass('green');
        }
    });

});
