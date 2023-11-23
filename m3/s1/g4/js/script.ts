class CapoAbbigliamento {

    constructor(public id:number, public codprod:number, public collezione:string, public capo:string, public modello:number, public quantita:number, public colore:string, public prezzoivaesclusa:number, public prezzoivainclusa:number, public disponibile:string, public saldo:number) {}

    getSaldoCapo():number {

        return this.saldo;
    }

    getAcquistoCapo():number {

        return this.prezzoivainclusa * (this.saldo * 0.01)
    }

}

async function getCapiAbbigliamento(): Promise<CapoAbbigliamento[]>{

    let res:Response = await fetch('./starter/Abbigliamento.json');
    let data:CapoAbbigliamento[] = await res.json()

    data.forEach((capo:CapoAbbigliamento) => console.log(capo));

    return data;


}

getCapiAbbigliamento()





