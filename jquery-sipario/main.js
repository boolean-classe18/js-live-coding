$(document).ready(function() {

    $('#muovi-sipario').click(function() {
        $('.sipario').slideToggle(3000, function() {
            // funzione di callback eseguita al termine dell'animazione
            alert('fine animazione');
        });
    });

});
