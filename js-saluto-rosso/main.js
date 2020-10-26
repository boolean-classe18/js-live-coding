// Ciao Visitatore!
// Imposta il nome di colore rosso in vari modi:
// - Solo con HTML+CSS
// - Scrivendo su element.style
// - Aggiungendo la classe con JS

// chiedo il nome all'utente
var nome_utente = prompt('come ti chiami?');
console.log(nome_utente);

// inserisco il nome dell'utente in pagina
document.getElementById('nome').innerHTML = nome_utente;

// cambio il colore del testo
// document.getElementById('saluto').style.color = 'red'; // stile inline
// document.getElementById('saluto').className = 'rosso'; // imposto la classe
document.getElementById('saluto').classList.add('rosso'); // aggiungo una classe
