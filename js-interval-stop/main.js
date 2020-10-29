$(document).ready(function() {

    // imposto un interval che ogni 2 secondi fa una stampa
    var clock = setInterval(function() {
        console.log('ciao dopo 2 secondi');
    }, 2000);


    // intercetto il click sul pulsante stop
    $('#stop').click(function() {
        console.log('cliccato!');
        // stoppo l'interval
        clearInterval(clock);
    });

});
