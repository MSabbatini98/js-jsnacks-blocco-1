var bike = [
    {
        nome : "bici1",
        colore : "bianco",
        peso : 25
    },
    {
        nome : "bici2",
        colore : "rosso e verde",
        peso : 30
    },
    {
        nome : "bici3",
        colore : "blue",
        peso : 23
    },
    {
        nome : "bici4",
        colore : "rosa",
        peso : 27.5
    },
    {
        nome : "bici5",
        colore : "arcobaleno",
        peso : 37
    }
];

var bike_lighter = bike[0];

console.log(bike_lighter);

for (var i = 0; i < bike.length; i++) {
    if (bike[i].peso < bike_lighter.peso) {
        bike_lighter = bike[i];
    }
}
console.log(bike_lighter);
