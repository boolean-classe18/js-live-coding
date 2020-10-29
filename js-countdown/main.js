// Simulare un countdown di 10 secondi che alla fine dice buon anno

$(document).ready(function() {

    // soluzione 1
    var tempo = 10;

    // imposto un interval che ripete ogni 1000 millisecondi
    var clock = setInterval(function() {

        // stampo il countdown
        console.log(tempo);
        tempo--;

        if(tempo <= 0) {
            clearInterval(clock);
            console.log('Buon Annoooooo!!!!');
        }
    }, 1000);

    /*
    // soluzione 2
    var tempo = 10;

    // imposto un interval che ripete ogni 1000 millisecondi
    var clock = setInterval(stampaCountDown, 1000);

    // imposto un timeout che allo scadere dei 10 secondi blocca l'interval
    setTimeout(stoppaCountDown, tempo * 1000);

    function stampaCountDown() {
        console.log(tempo);
        tempo--;
    }

    function stoppaCountDown() {
        clearInterval(clock);
        console.log('Buon Annoooooo!!!!');
    }
    */

});
