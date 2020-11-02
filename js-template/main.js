$(document).ready(function() {

    var titolo = 'hello world';

    // faccio una copia del template per il titolo
    var clone_titolo = $('.template h1').clone();
    // inserisco il testo all'interno del titolo
    clone_titolo.text(titolo);
    // aggiungo il titolo in pagina
    $('.container').append(clone_titolo);

    // ripeto 10 volte
    for (var i = 0; i < 10; i++) {
        // faccio una copia del titolo definito nel template
        var clone_titolo = $('.template h1').clone();
        // inserisco il titolo corretto nel titolo copiato
        clone_titolo.text('titolo numero: ' + (i+1));
        // inserisco in pagina il nuovo titolo
        $('.container').append(clone_titolo);
    }

});
