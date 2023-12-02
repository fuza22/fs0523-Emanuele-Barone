/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Sono presenti tre differenti tipologie di datatype in JavaScript:

1) Stringhe: Questa tipologia indica sia un singolo, che un insieme di caratteri. Quest'ultimi devono essere contenuti all'interno di apici prestabiliti, che possono essere ('') oppure(""). E' importante specificare che quando si indica una stringa, deve essere utilizzato un
solo di apice. (es. let nome = "Andrea"
2) Numeri: Questa tipologia si utilizza per indicare un dato numerico che può essere sia intero che decimale. Per indicare un numero decimale deve essere utilizzato il punto e non la virgola. (es. let numero = 0.332)
3) Booleano: Questa tipologia di datatype ammette solo due valori, ossia true e false. In genere viene utilizzato per effettuare dei controlli e far prendere decisioni al nostro codice. (es. let truOrFalse = true)


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let nome = "Emanuele";
console.console.log(nome); /*


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let x = 12;
let y = 20;
let somma = x + y;
console.log(somma); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12;
console.log(x); /*

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const nome = "Barone";
console.log(nome);
Uncaught SyntaxError: Identifier 'nome' has already been declared (at D1.js:51:7) /*

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let a = 4;
let x = "12";
let sottrazione = a - x;
console.log(sottrazione); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* let name1 = "john";
let name2 = "John";
let uguaglianza = name1 === name2;
console.log(uguaglianza);
console.log(name1.toLowerCase === name2.toLowerCase); +/

