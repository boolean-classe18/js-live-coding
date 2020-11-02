$(document).ready(function() {

    // leggo il codice html del template
    var html_template = $('#post-template').html();

    // compilo il codice html del template
    // e ottengo la funzione da utilizzare per inserire i placeholder
    var template = Handlebars.compile(html_template);

    // lista di articoli da inserire in pagina
    var articoli = [
        {
            titolo: "titolo 1",
            testo: "Questo è il testo dell'articolo 1"
        },
        {
            titolo: "titolo 2",
            testo: "Questo è il testo dell'articolo 2"
        },
        {
            titolo: "titolo 3",
            testo: "Questo è il testo dell'articolo 3"
        },
        {
            titolo: "titolo 4",
            testo: "Questo è il testo dell'articolo 4"
        }
    ];

    // ciclo tutti gli articoli
    for (var i = 0; i < articoli.length; i++) {
        // per ogni articolo, preparo i placeholder corrispondenti
        // => recupero quindi il titolo e il testo dell'elemento corrente
        var placeholders = {
            titolo_post: articoli[i].titolo,
            descrizione_post: articoli[i].testo
        };

        // tramite la funzione restituita da handlebars, riempio i placeholder
        // e ottengo l'html finale completo con i dati
        var html_finale = template(placeholders);

        // inserisco l'articolo in pagina
        $('.container').append(html_finale);
    }

});
