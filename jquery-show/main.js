// Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto

// intercetto il click sul bottone
$('button').click(function() {
    // visualizzo il paragrafo
    // $('p').show();
    // $('p').fadeIn();
    $('p').addClass('visibile');
});
