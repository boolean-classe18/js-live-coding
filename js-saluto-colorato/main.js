// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire
// “Ciao <nome>”
// e il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

// chiedo il nome dell'utente
var nome_utente = prompt('come ti chiami?');
console.log(nome_utente);

// chiedo se è maschio o femmina
var sesso = prompt('sei maschio o femmina? (indica m o f)');
console.log(sesso);

// inserisco il nome dell'utente in pagina
document.getElementById('nome').innerHTML = nome_utente;

// cambio il colore del testo in base al sesso inserito
if(sesso === 'm') {
    document.getElementById('saluto').className = 'maschio';
} else {
    document.getElementById('saluto').className = 'femmina';
}
