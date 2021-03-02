var num_1 = prompt("Inserisci il primo numero ");
var num_2 = prompt("Inserisci il secondo numero ");

var maggiore;


if (num_1 > num_2){
    maggiore = num_1;
} else if (num_1 == num_2){
    maggiore = "I due numeri hanno lo stesso valore"
} else if (num_1 < num_2) {
    maggiore = num_2
}

document.getElementById("output").innerHTML = maggiore;
