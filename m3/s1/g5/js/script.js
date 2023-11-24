"use strict";
class Smartphone {
    constructor(carica = 0, numeroChiamate = 0, costoMinuto = 0.15) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Il credito residuo è di ${this.carica} euro`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(mins) {
        this.numeroChiamate += 1;
        this.carica -= (mins * this.costoMinuto);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let user1Smartphone = new Smartphone();
let user2Smartphone = new Smartphone();
let user3Smartphone = new Smartphone();
user1Smartphone.ricarica(50);
console.log(user1Smartphone.numero404());
console.log(user1Smartphone.getNumeroChiamate());
user1Smartphone.chiamata(30);
console.log(user1Smartphone.getNumeroChiamate());
console.log(user1Smartphone.numero404());
user1Smartphone.azzeraChiamate();
console.log(user1Smartphone.getNumeroChiamate());
user2Smartphone.ricarica(20);
console.log(user2Smartphone.numero404());
console.log(user2Smartphone.getNumeroChiamate());
user2Smartphone.chiamata(5);
console.log(user2Smartphone.getNumeroChiamate());
console.log(user2Smartphone.numero404());
user2Smartphone.azzeraChiamate();
console.log(user2Smartphone.getNumeroChiamate());
user3Smartphone.ricarica(10);
console.log(user3Smartphone.numero404());
console.log(user3Smartphone.getNumeroChiamate());
user3Smartphone.chiamata(2);
console.log(user3Smartphone.getNumeroChiamate());
console.log(user3Smartphone.numero404());
user3Smartphone.azzeraChiamate();
console.log(user3Smartphone.getNumeroChiamate());
//# sourceMappingURL=script.js.map