var squadre = [
    {
        nome : "Lazio",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Sampdoria",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Inter",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "ChievoVerona",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Roma",
        punti : 0,
        falli_subiti : 0
    },
    
];
console.log("array iniziale", squadre);
// inserisco randomicamente i valori di punti e falli_subiti
for (var i = 0; i < squadre.length; i++ ) {
    squadre[i].punti = numeriRandom(0, 60);
    squadre[i].falli_subiti = numeriRandom(0, 80);
}

// stampo a console una stringa con solo nome e falli subiti
var final_array = [];

for (var u = 0; u < squadre.length; u++ ) {
    
    var new_obj = {
        nome : squadre[u].nome,
        falli : squadre[u].falli_subiti
    };

    final_array.push(new_obj);
}

console.log("array finale", final_array);

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
}