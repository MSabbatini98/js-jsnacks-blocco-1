var array_num = [2, 5, 25, 462, 23, 12, 24, 65, 87, 378, 244, 1, 9, 56, 97];

var somma = 0;

for (var i = 0; i < array_num.length; i++){
    console.log(i);
    if ( i % 2 == 1) {
        somma += array_num[i];
        console.log(array_num[i], i, somma);
    } 
}
console.log(somma);

document.getElementById("outcome").innerHTML = somma;