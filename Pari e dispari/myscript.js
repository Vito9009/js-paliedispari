/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let chooseEvenOrOdd = prompt ("Scegli pari o dispari!"); // Chiedere all'utente di scegliere pari o dispari
let lowercaseEvenOrOdd = chooseEvenOrOdd.toLowerCase(); // Rendere la parola pari o dispari minuscola per evitare eventuali problemi

let userNumber = parseInt(prompt ("Adesso scegli un numero da 1 a 5!")); // Chiedere all'utente di scegliere un numero da 1 a 5

while(userNumber > 5 || userNumber < 1) { // Se l'utente inserisce un numero non corretto appare un alert ed in seguito un secondo prompt per inserire un numero valido
        alert("Il numero inserito non è valido. Devi inserire un numero da 1 a 5!");
        userNumber = parseInt(prompt ("Adesso scegli un numero da 1 a 5!"));
}
console.log("USER NUMBER:" + " " + "=" + " " + userNumber); // Viene mostrato in console il numero valido scelto dall'utente


function numberRandom() { // Tramite una funzione viene generato il numero casuale da 1 a 5 per il computer
    return parseInt(Math.floor(Math.random() *5 ) +1 );
}

let pcNumberRandom = numberRandom(); // Il numero generato tramite la funzione viene "inserito" in una variabile
console.log("PC NUMBER:" + " " + "=" + " " + pcNumberRandom) // Viene mostrato in console il numero random del PC

let sum = (userNumber + pcNumberRandom); // Variabile con la somma del numero scelto dall'utente e del numero random del PC

console.log("Ecco la somma dei due numeri:" + " " + sum); // Viene mostrata la somma dei due numeri

function sumCheckEvenOrOdd() { // Viene verificato se la somma de due numeri è pari o dispari
    if(sum %2 == 0) {
        sum = "pari";
    }else {
        sum = "dispari";
    }

    return sum
}

let verifiedSum = sumCheckEvenOrOdd();  // Il risultato della verifica tramite funzione viene "inserito" in una variabile

if (lowercaseEvenOrOdd == verifiedSum){ // Viene mostrato il risultato finale della sfida
    console.log("Hai vinto!");
}else {
    console.log("Hai perso!");
}