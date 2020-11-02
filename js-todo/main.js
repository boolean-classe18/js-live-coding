$(document).ready(function() {

    var todos = [
        'fare la spesa',
        'chiamare la nonna',
        'studiare'
    ];

    // ciclo tutti i todo
    for (var i = 0; i < todos.length; i++) {

        // creo una copia del list item
        var item_clone = $('.template li').clone();

        // inserisco nella copia il testo del todo corrente
        item_clone.children('.todo-text').text(todos[i]);

        // inserisco il nuovo todo in pagina
        $('#lista-todo').append(item_clone);
    }

    // intercetto il click sul bottone "aggiungi"
    $('#aggiungi-todo').click(function() {
        // leggo il testo digitato dall'utente nell'input
        var testo_utente = $('#testo-nuovo-todo').val();
        console.log(testo_utente);

        // resetto l'input di testo => scrivo all'interno una stringa vuota
        $('#testo-nuovo-todo').val('');

        // creo una copia del list item
        var item_clone = $('.template li').clone();

        // inserisco nella copia il testo inserito dall'utente
        item_clone.children('.todo-text').text(testo_utente);

        // inserisco il nuovo todo in pagina
        $('#lista-todo').append(item_clone);

    });

    // intercetto il click sull'intera lista (<ul>)
    // e recupero il list item specifico su cui l'utente ha cliccato
    $('#lista-todo').on('click', '.todo-item', function() {
        // elimino l'elemento su cui l'utente ha cliccato
        $(this).remove();
    });

});
