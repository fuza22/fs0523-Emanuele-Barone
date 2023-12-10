"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * (this.saldo * 0.01);
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
function getCapiAbbigliamento() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('./starter/Abbigliamento.json');
        let data = yield res.json();
        data.forEach((c) => {
            let capo = new CapoAbbigliamento(c.id, c.codprod, c.collezione, c.capo, c.modello, c.quantita, c.colore, c.prezzoivaesclusa, c.prezzoivainclusa, c.disponibile, c.saldo);
            console.log(capo.getSaldoCapo());
            console.log(capo.getAcquistoCapo());
        });
    });
}
getCapiAbbigliamento();
//# sourceMappingURL=script.js.map