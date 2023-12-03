/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let number1 = 22;
let number2 = 27;

 if (number1 > number2) {

console.log("Il numero più grande è 22");

}
else if (number1 < number2) {

console.log("Il numero più grande è 27");

} */


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* let number1 = 7;

if (number1 != 5){

console.log("not equal");

} */


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* let number1 = 25;

if ( number1 % 5 == 0 ) {

console.log("divisibile per 5");

}*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let number1 = 8;
let number2 = 0;

if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {

  console.log("Verificato");

} */


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 80;
let shippingCost = 10;
let totalCost = totalShoppingCart;

if(totalShoppingCart < 50){

totalCost += shippingCost

}

console.log("Totale da pagare:", totalCost, "euro"); /*


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 80;
totalShoppingCart = totalShoppingCart * 0.8;
let shippingCost = 10;
let totalCost = totalShoppingCart;


if(totalShoppingCart < 50){

totalCost += shippingCost

}

console.log("Totale da pagare:", totalCost, "euro"); /*


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let num1 = 6
let num2 = 1
let num3 = 9

/* if (num1 >= num2) 
{
  if (num3 >= num1) 
  {
    console.log(num3, num1, num2)
  } 
  else {
  if (num3 >= num2) {
      console.log(num1, num3, num2)
    } 
else {
      console.log(num1, num2, num3)
    }
  }
} 
else 
{
  if (num3 >= num2) {
    console.log(num3, num2, num1)
  } else {
    if (num3 >= num1) {
      console.log(num2, num3, num1)
    } else {
      console.log(num2, num1, num3)
    }
  }
} */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* let val = 5;

if (typeof val === "number")
{
console.log("E' un numero");

}
else {
  console.log('Non è un numero')
} */



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* let number = 4

if (number % 2 === 0){

console.log("Il numero è pari");

}
else {
  console.log("Il numero è dispari");
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

 /* let val = 7

  if (val < 5) 
  {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop()
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = [];

arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)
console.log(arr);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[9] = 100
console.log(arr);