var invitati = [
/*                  "Samuele", 
                    "Lorena", 
                    "Francesca", 
                    "Gabriele", 
                    "Vito", 
                    "Luca", 
                    "Matteo", 
                    "Michele",
*/
                    "samuele", 
                    "lorena", 
                    "francesca", 
                    "gabriele", 
                    "vito", 
                    "luca", 
                    "matteo", 
                    "michele",  
                ];
var esito = false;
var utente = prompt("Inserisci il tuo nome e scopri se sei invitato anche tu alla festa di Inzaghi. ");

// rimuovo la case sensitiveness in maniera rozzissima 
utente = utente.toLowerCase(); 

for (var i = 0; i < invitati.length; i++) {
    console.log(i, invitati[i], utente);
    if (invitati[i] == utente) {
        esito = true;
        break;
    } else {
        esito = false;
    }
}

if (esito == true) {
    document.getElementById("outcome").innerHTML = "Sei invitato anche te alla festa di Inzaghi!";
} else {
    document.getElementById("outcome").innerHTML = "Mi dispiace, ma non sei abbastanza popular per essere invitato alla festa di Inzaghi!";
}