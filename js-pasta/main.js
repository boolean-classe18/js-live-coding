// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()

$(document).ready(function() {

    // chiedo all'utente quanti secondi mancano
    var secondi = parseInt(prompt('Quanti secondi mancano?'));
    console.log(secondi);

    // imposto un timeout con il tempo indicato dall'utente
    setTimeout(function() {
        alert('la pasta è pronta!');
    }, secondi * 1000);

});
