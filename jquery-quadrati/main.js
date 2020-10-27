$(document).ready(function() {


    $('.quadrato').click(function() {
        // $('.quadrato').hide(); // nasconde TUTTI i quadrati
        // $(this).hide(); // nasconde il quadrato su cui l'utente ha cliccato
        var numero = $(this).text();
        console.log('Il quadrato cliccato è il numero: ' + numero);
    });

});
