$(document).ready(function() {

    // recupero la data e l'orario attuale dal sistema
    var adesso = new Date();
    // leggo le ore attuali
    var ore = adesso.getHours();

    console.log(ore);

    if(ore > 10) {
        // dopo le ore 10 applico la modalità dark (di default è light)
        switchMode();
    }

    // quando l'utente clicca sull'icona della lampadina, cambio la modalità
    $('.fa-lightbulb').click(switchMode);

    // if($('.fa-lightbulb').hasClass('fas')) {
    //     console.log('lampadina piena');
    // } else {
    //     console.log('lampadina vuota');
    // }
});

function switchMode() {
    // inverto l'icona da vuota a piena e viceversa
    $('.fa-lightbulb').toggleClass('far fas');

    // inverto lo stato del wrapper da light a dark e viceversa
    $('.wrapper').toggleClass('dark');
}
