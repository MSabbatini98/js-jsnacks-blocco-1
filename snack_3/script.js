var tot = 0;
var num = 0;

for (var i = 1; i <= 10; i++) {
    //todo non funziona il validator
    for (var j = 1; j < 10; j++) {
        if(!isNaN(num)){
            num = parseInt(prompt("inserisci un numero da sommare"));
            console.log("valore inserito", num);
            tot += num;
            console.log(i, num, tot);
            break;
        } else {
            console.log("valore sbagliato");
            num = parseInt(prompt("Inserisci un NUMERO "));
        }
    }
}

document.getElementById("outcome").innerHTML = "la somma di tutti e 10 i valori inseriti è " + tot;
