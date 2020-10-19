// posso innestare un ciclo for in un altro ciclo for:
// N.B.: devo usare un contatore diverso!!
// il ciclo for interno verrà ripetuto N volte, dove N è il limite del for esterno

for (var i = 0; i < 5; i++) {

    console.log('i = ' + i); // 5 stampe

    console.log('-----');

    for (var j = 0; j < 3; j++) {

        console.log('j = ' + j); // 3 stampe * 5
    }

    console.log('-----');
}
