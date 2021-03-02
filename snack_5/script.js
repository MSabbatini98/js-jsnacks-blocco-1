var array = [];

var odd = 0;

for (var i = 0; i != 6; i++) {
    odd = parseInt(prompt("Inserisci un numero"));
    if ((odd % 2) == 1) {
        array.push(odd);
        console.log("inserito nell'array ", odd);
    } else {
        console.log("NON  inserito nell'array");
        continue;
    }
}

// stampa array

for (var j = 0; j != array.length; j++) {
    document.getElementById("outcome").innerHTML += array[j] + "<br>";
}