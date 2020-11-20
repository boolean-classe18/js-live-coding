$(document).ready(function() {

    $('h1').hide();

    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(risposta) {
            let numero = risposta.response;
            $('#numero_random').text(numero);
            $('h1').show();
        },
        'error': function() {
            console.log('si è veirificato un errore');
        }
    });

});
