$(document).ready(function() {

    // intercetto il click sul titolo delle domande
    $('h2').click(function() {
        // recupero il paragrafo successivo al titolo su cui l'utente ha cliccato   
        $(this).next('p').toggle();
    });

});
