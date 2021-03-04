var num = parseInt(prompt("Inserisci un numero intero positivo"));
while ((isNaN(num) || num <= 0)) {
    alert ("NON hai inserito un numero intero positivo");
    num = parseInt(prompt("Inserisci un numero intero positivo:"));
}

if (num % 2 == 0) {
    document.getElementById("outcome").innerHTML = num;
} else {
    alert("I numeri dispari sono brutti, quindi ecco a te il numero pari successivo");
    document.getElementById("outcome").innerHTML = (num + 1);
}