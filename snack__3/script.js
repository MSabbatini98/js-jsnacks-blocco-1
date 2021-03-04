var array_nomi = [
                    "Andrea",
                    "Matteo",
                    "Gabriele",
                    "Beatrice",
                    "Davide",
                    "Alfredo",
                    "Samuele",
                    "Alessandro",
                    "Tommaso",
                    "Daniele",
                    "Caterina"
                ];

var array_cognomi = [
                        "Inzaghi",
                        "Greco",
                        "Corti",
                        "Castagno",
                        "Sadotti",
                        "Ficocelli",
                        "Madrigali",
                        "Giordano",
                        "Dossena",
                        "Vergani",
                        "Bertotti"
                    ];

var random_value_nome;
var random_value_cognome;

var random_nomi_cognomi = [];



for (var yyy = 0; yyy < array_nomi.length; yyy++){

    random_value_nome = Math.floor(Math.random() * array_nomi.length );
    random_value_cognome = Math.floor(Math.random() * array_cognomi.length ); 

    console.log(random_value_nome, random_value_cognome);

    random_nomi_cognomi.push(array_nomi[random_value_nome] + " " +  array_cognomi[random_value_cognome]);

    console.log(array_nomi[random_value_nome], array_cognomi[random_value_cognome]);

}

for (var yy = 0; yy < random_nomi_cognomi.length; yy++){
    console.log(random_nomi_cognomi[yy]);
}