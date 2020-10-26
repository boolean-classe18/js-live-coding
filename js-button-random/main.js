// Al click di un pulsante, deve apparire un alert con un numero random

// intercetto il click sul pulsante
document.getElementById('button').addEventListener('click', visualizzaRandom);

function visualizzaRandom() {
    // genero un numero random
    var numero = getRndInteger(1, 10);
    // visualizzo alert con numero random
    alert(numero);
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
