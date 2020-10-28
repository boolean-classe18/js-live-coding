$(document).ready(function() {

    // intercetto il click sull'icona dell'app menu
    $('.app-menu').click(function() {
        // visualizzo o nascondo il menu
        // $('.dropdown-menu').toggle();
        $('.dropdown-menu').toggleClass('active');
    });

    // $('.app-menu').mouseenter(function() {
    //     $('.dropdown-menu').addClass('active');
    // });
    //
    // $('.dropdown-item').mouseleave(function() {
    //     $('.dropdown-menu').removeClass('active');
    // });

});
