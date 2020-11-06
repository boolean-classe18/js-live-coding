$(document).ready(function() {


    // intercetto il click sul pulsante
    $('button').click(saluta_utente);

    // intercetto il tasto INVIO nell'input
    $('#nome').keyup(function(event) {
        console.log(event.which);
        // il tasto INVIO è il numero 13
        if(event.which == 13) {
            saluta_utente();
        }
    });

    // funzione che saluta l'utente per nome
    function saluta_utente() {
        let nome_utente = $('#nome').val();
        alert('Ciao ' + nome_utente);
    }

});
