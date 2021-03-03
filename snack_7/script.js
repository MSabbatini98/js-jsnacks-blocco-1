var num = 2;
var potenza = 0;
i = 0;
while (potenza < 1000) {
    console.log(i, potenza, num);
    potenza = Math.pow(2, i);
    i++;
    document.getElementById("outcome").innerHTML *= num + "elevato alla " + i + " = " +  potenza;
}