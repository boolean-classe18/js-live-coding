$(document).ready(function() {

    /*

    Esempio 1

    */

    //dichiaro un oggetto "palla" con 3 proprietà: colore, tipo e diametro
    var palla = {
        'colore': ['blu', 'rosso'],
        'tipo': 'pallina da golf',
        'diametro': 3
    };

    // per modificare il valore di una proprietà posso usare la dot notation
    palla.diametro = 4.2;
    // oppure la square bracket notation
    palla['diametro'] = 5;

    // per dichiarare una nuova proprietà posso usare la dot notation
    palla.prezzo = 10;
    // oppure la square braket notation
    palla['prezzo'] = 15;

    // con un ciclo for-in ciclo tutte le proprietà dell'oggetto "palla"
    for (var chiave in palla) {
        // ad ogni iterazione il ciclo for-in prende in esame una proprietà dell'oggetto

        // la variabile chiave contiene il nome della proprietà
        console.log(chiave);
        // per accedere al valore della proprietà devo usare la square bracket notation
        console.log(palla[chiave]);
    }

    /*

    Esempio 2

    */
    // dichiaro un array di oggetti:
    // - ogni elemento dell'array è un oggetto che rappresenta una classe
    // - ogni classe ha le proprietà nome e numero_studenti
    var classi = [
        {
           'nome' : 'Classe 1',
           'numero_studenti' : 10,
        },
        {
           'nome' : 'Classe 2',
           'numero_studenti' : 15,
        },
    ];

    // creo un nuovo oggetto con le stesse proprietà (nome e numero_studenti)
    var nuova_classe = {
        'nome': 'Classe 3',
        'numero_studenti': 20
    };

    // inserisco nell'array la nuova classe
    classi.push(nuova_classe);

    // ciclo l'array delle classi (ogni elemento dell'array è un oggetto)
    for (var i = 0; i < classi.length; i++) {
        // recupero una classe alla vola, che è un oggetto!
        var classe_corrente = classi[i];

        // recupero il nome e il numero_studenti della classe corrente
        // con la square bracket notation
        var nome_classe = classe_corrente['nome'];
        var numero_studenti_classe = classe_corrente['numero_studenti'];

        // con la dot notation
        var nome_classe = classe_corrente.nome;
        var numero_studenti_classe = classe_corrente.numero_studenti;

        // con un for-in ciclo tutte le proprietà della classe corrente
        for (var chiave in classe_corrente) {
            // stampo solo il nome della classe:
            // verifico se la chiave corrente è il nome
            if(chiave == 'nome') {
                // se sì, la stampo
                console.log(chiave + ': ' + classe_corrente[chiave]);
            }
        } // --> fine del ciclo for-in interno (che scorre le proprietà dell'oggetto corrente)
    } // --> fine del ciclo for esterno (che scorre tutti gli elementi dell'array)

});
