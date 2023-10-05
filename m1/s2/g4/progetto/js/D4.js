/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* let l1 = 10;
let l2 = 15;

function calculateArea (l1,l2){

return l1 * l2;

}

area = calculateArea(l1,l2)

console.log(area); /*

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


/* let a = 5;
let b = 5;

function crazySum(a,b){

    if( a != b ){
    return a + b;

}

else {

return ( a + b ) * 3;

    }

}

let sum = crazySum(a,b);

console.log(sum); /*

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*
let a = 25;

function crazyDiff(a){
 
   

    if(a > 19){

        return Math.abs((a - 19) * 3);

    }
    else {

        return Math.abs (a - 19);

    }

}

let difference = crazyDiff(a)
console.log(difference); /*



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* let n = 100

function boundary (n){

    if ( n == 400 || n > 20 && n <= 100 ){

        return true;

    }
    else {

        return false;
    }

}

let vero = boundary(n)

console.log(vero); /*



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* let string = "EPICODE"

function epify (string){

   if(string.startsWith("EPICODE"))

    return string

   else{
    return ("EPICODE" + string);
   }
}

let text = epify(string)
console.log(text); /*



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* let n1 = 21;

function check3and7(n1){

if(n1 % 3 == 0 || n1 % 7 == 0){

return true
}

else {

    return false
}


}

let multiple = check3and7(n1)
console.log(multiple); */


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* let par = "EPICODE"

function reverseString(par){

    return par.split('').reverse().join('')

}
let reverse = reverseString(par)
console.log(reverse); /*


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* 
const parole = ["gatto", "cane", "giraffa"];


function upperFirst(parole){

   const animal = [];

    for (let i = 0; i < parole.length; i++){

    animal.push (parole[i].charAt(0).toUpperCase() + parole[i].slice(1));}

    return animal;

}

let words = upperFirst(parole);
console.log(words);
*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
