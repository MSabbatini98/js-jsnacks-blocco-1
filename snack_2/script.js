var par_1 = prompt("Inserisci la prima parola ");
var par_2 = prompt("Inserisci la seconda parola ");


var first;
var second;
var draw = "";

for (var i = 1; i < 10; i++) {

    if(isNaN(par_2) && isNaN(par_1)){
        console.log(par_1, par_2);
    } else {
        par_1 = prompt("Inserisci la prima PAROLA ");
        par_2 = prompt("Inserisci la seconda PAROLA ");
    }
}

if (par_1.length > par_2.length) {
    first = par_2;
    second = par_1; 
    console.log(first, second);
} else if (par_1.length == par_2.length){
    draw = "Le parole hanno la stessa lunghezza"
    console.log(first, second);

} else if (par_1.length < par_2.length){
    first = par_1;
    second = par_2;
    console.log(first, second);
}
if (draw == "") {
    document.getElementById("outcome").innerHTML = "La parola più corta è : " + first + " mentre la più lunga è :" + second;

} else {
    document.getElementById("outcome").innerHTML = draw;
}
