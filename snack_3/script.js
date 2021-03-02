var tot = 0;
var num = 0;

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j < 10; j++) {
        if(!isNaN(num)){
            console.log(num);
            break;
        } else {
            num = parseInt(prompt("Inserisci un NUMERO "));
        }
    }
    num = parseInt(prompt("inserisci un numero da sommare"));
    tot += num;
    console.log(i, num, tot);
}

document.getElementById("outcome").innerHTML = "la somma di tutti e 10 i valori inseriti è " + tot;
