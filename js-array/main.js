// posizioni:      0       1        2
var iscritti = ['Luca', 'Marco', 'Paolo'];

console.log(iscritti[0]);
console.log(iscritti[1]);
console.log(iscritti[2]);
console.log(iscritti[3]); // la posizione 3 non esiste => l'elemento in posizione 3 non è definito!

console.log(iscritti);
console.log(iscritti.length);

var nome_utente = prompt('Come ti chiami?');
iscritti.push(nome_utente); // inserito in posizione 3 (in coda)

// iscritti[1] = nome_utente; // sovrascrive l'elemento in posizione 1!

console.log(iscritti);
console.log(iscritti.length);
console.log(iscritti[3]); // a questo punto la posizione 3 esiste!
