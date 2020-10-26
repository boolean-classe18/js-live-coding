// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente

// intercetto il mouse che "entra"
$('button').mouseenter(function() {
    $('button').addClass('colorato');
});

// intercetto il mouse che "esce"
$('button').mouseleave(function() {
    $('button').removeClass('colorato');
});

// intercetto il doppio click
$('button').dblclick(function() {
    $('button').text('cliccato');
});
