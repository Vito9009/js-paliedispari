/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const askWord = prompt("Inserisci una parola e scopri se è palindroma!") // Chiedere all'utente di inserire una parola
let lowercaseAskWord = askWord.toLowerCase(); // Rendere la parola minuscola (per evitare problemi nel caso in cui l'utente inserisca parole con lettere maiuscole)

let wordArray = []; // Array vuoto per la parola inserita
let reverseWordArray = []; // Array vuoto per la parola inserita partendo dall'ultima lettera

function palindrome(){
    for(i = 0; i < askWord.length; i++){ // push della parola inserita nella apposita array
        wordArray.push(askWord.toLowerCase()[i]);

        for(i = askWord.length - 1; i >= 0; i--){ // push della parola inserita al rovescio nella apposita array
            reverseWordArray.push(askWord.toLowerCase()[i]);

            if(JSON.stringify(wordArray) == JSON.stringify(reverseWordArray)){ // Se la parola inserita è uguale alla stessa parola scritta nel senso inverso, allora sarà un palindromo
                return "Si, è un palindromo.";
            }else{ // Se la parola inserita non è uguale alla stessa parola scritta nel senso inverso, allora non sarà un palindromo
                return "No, non è un palindromo.";
            }    
        }        
    }
}

let palindromeWord = palindrome(); // La funzione viene "inserita" in una variabile

console.log(askWord + " " + "è un palindromo" + "?");
console.log(palindromeWord); // Viene mostrato in console se la parola indicata è un palindromo

/*
JSON stringify serve a convertire un oggetto o un valore JavaScript in una stringa JSON.
In questo caso senza il metodo JSON stringify le parole inserite non erano mai dei palindromi (anche se la parola inserita in realtà lo era).

Concetto non molto chiaro e da rivedere.

document.writeln(askWord + " " + "è un palindromo" + "?" + "<br>");
document.writeln(palindromeWord);
*/