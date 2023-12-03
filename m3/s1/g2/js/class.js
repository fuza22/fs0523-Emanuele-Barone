"use strict";
class SonAccount {
    constructor() {
        this.balance = 0;
        this.balance = 0;
    }
    deposit(s) {
        this.balance += s;
    }
    widthDraw(s) {
        this.balance -= s;
    }
}
let sonAccount = new SonAccount();
sonAccount.deposit(100);
sonAccount.widthDraw(35);
console.log(sonAccount.balance);
class MotherAccount extends SonAccount {
    addInterest() {
        this.balance *= 1.1;
    }
}
let motherAccount = new MotherAccount();
motherAccount.deposit(100);
motherAccount.widthDraw(35);
motherAccount.addInterest();
console.log(motherAccount.balance);
//# sourceMappingURL=class.js.map