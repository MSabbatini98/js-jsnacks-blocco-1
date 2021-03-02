var num_1 = prompt("Inserisci il primo numero ");
var num_2 = prompt("Inserisci il secondo numero ");

var maggiore;

for (var i = 1; i < 10; i++) {
    if(!isNaN(num_2) && !isNaN(num_2)){
        console.log(num_1, num_2)
    } else {
        num_1 = prompt("Inserisci il primo NUMERO ");
        num_2 = prompt("Inserisci il secondo NUMERO ");
    }
}

if (num_1 > num_2){
    maggiore = num_1;
} else if (num_1 == num_2){
    maggiore = "I due numeri hanno lo stesso valore"
} else if (num_1 < num_2) {
    maggiore = num_2
}

document.getElementById("input_1").innerHTML = "Il primo input è stato : " + num_1;
document.getElementById("input_2").innerHTML = "Il secondo input è stato : " + num_2;

document.getElementById("outcome").innerHTML = "Il maggiore tra " + num_1 + " e " + num_2 + " è " + maggiore;
