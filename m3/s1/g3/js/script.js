"use strict";
// tassa INPS 26,23% del reddito netto
// tassa IRPEF 23% fino a 15.000 euro • 
// 25% oltre 15.000 e fino a 28.000 • 
// 35% oltre 28.000 e fino a 50.000 euro • 
// 43% oltre 50.000 euro
class LavAutonomo {
    constructor(codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef();
    }
    getTasseInps() {
        return this.redditoAnnuoLordo * (this.tasseInps * 0.01);
    }
    getTasseIrpef() {
        return this.redditoAnnuoLordo * (this.tasseIrpef * 0.01);
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    }
}
class LavAutonomo1 extends LavAutonomo {
}
let lavoratoreItas = new LavAutonomo1(78, 27000, 26, 23);
console.log(lavoratoreItas);
console.log("Il reddito annuo netto del lavoratore autonomo italiano è:", lavoratoreItas.getRedditoAnnuoNetto());
//# sourceMappingURL=script.js.map