var max_num = prompt("inserisci un numero positivo");
if (!isNaN(max_num) && max_num > 0){
    for (var i = 1; i <= max_num; i++) {
        console.log(i);
        document.getElementById("outcome").innerHTML += i + " al cubo è = " + i * i * i + "<br>";
    }
} else {
        max_num = alert("Ho detto di inserire un numero");
        location.reload();
}
