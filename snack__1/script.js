var num;
var somma = 0;
// versione con il ciclo for
for (var i = 0; i < 5; i++){
    // number validator
    num = parseInt(prompt("Inserisci un numero intero positivo: "));
    while ((isNaN(num) || num <= 0)) {
        alert ("NON hai inserito un numero intero positivo");
        num = parseInt(prompt("Inserisci un numero intero positivo:"));
    } 

    somma += num;
    console.log(somma, num);
    document.getElementById("outcome").innerHTML = somma;
}

/*

// versione con while
var j = 0;
while (j < 5){
    // number validator
    num = parseInt(prompt("Inserisci un numero intero positivo: "));
    while ((isNaN(num) || num <= 0)) {
        alert ("NON hai inserito un numero intero positivo");
        num = parseInt(prompt("Inserisci un numero intero positivo:"));
    } 


    somma += num;
    console.log(somma, num);
    document.getElementById("outcome").innerHTML = somma;
    j++;
}

*/

