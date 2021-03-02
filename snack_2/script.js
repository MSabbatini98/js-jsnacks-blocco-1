var par_1 = prompt("Inserisci la prima parola ");
var par_2 = prompt("Inserisci la seconda parola ");


var first;
var second;
var draw = "";

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
