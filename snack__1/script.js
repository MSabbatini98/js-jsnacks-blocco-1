var num;
var somma = 0;
/*
// versione con il ciclo for
for (var i = 0; i < 5; i++){
    // number validator
    for (var xxx = 10; xxx != 0; xxx--){
        num = parseInt(prompt("Inserisci un numero intero:"));
        if (!(isNaN(num)) && num > 0) {
            break;
        } else {
            alert("Attenzione, non ha inserito un numero intero positivo, ritentare")
        }
    }
    somma += num;
    console.log(somma, num);
    document.getElementById("outcome").innerHTML = somma;
}

*/

// versione con while
var j = 0;
while (j < 5){
    // number validator
    for (var xxx = 10; xxx != 0; xxx--){
        num = parseInt(prompt("Inserisci un numero intero:"));
        if (!(isNaN(num)) && num > 0) {
            break;
        } else {
            alert("Attenzione, non ha inserito un numero intero positivo, ritentare")
        }
    }

    somma += num;
    console.log(somma, num);
    document.getElementById("outcome").innerHTML = somma;
    j++;
}


