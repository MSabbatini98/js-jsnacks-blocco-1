var numero = prompt("Inserisci un numero");
var somma = 0;

console.log(numero, numero.length);

var lunghezza = numero.length;

for (var i = 0; i < lunghezza; i++){
    console.log(i, numero, somma);
    somma += parseInt(numero[i]);
}

document.getElementById("outcome").innerHTML = somma;