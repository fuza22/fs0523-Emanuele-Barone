class CapoAbbigliamento {

    constructor(public id:number, public codprod:number, public collezione:string, public capo:string, public modello:number, public quantita:number, public colore:string, public prezzoivaesclusa:number, public prezzoivainclusa:number, public disponibile:string, public saldo:number) {}

    getSaldoCapo():number {

        return this.prezzoivainclusa * (this.saldo * 0.01)
    }

    getAcquistoCapo():number {

        return this.prezzoivainclusa - this.getSaldoCapo()
    }

}

async function getCapiAbbigliamento(): Promise<any>{

    let res:Response = await fetch('./starter/Abbigliamento.json');
    let data:CapoAbbigliamento[] = await res.json()

    data.forEach((c:CapoAbbigliamento) => {
        let capo = new CapoAbbigliamento(

        c.id,
        c.codprod,
        c.collezione,
        c.capo,
        c.modello,
        c.quantita,
        c.colore,
        c.prezzoivaesclusa,
        c.prezzoivainclusa,
        c.disponibile,
        c.saldo,
        
        );

        console.log(capo.getSaldoCapo());
        console.log(capo.getAcquistoCapo());
        
        
    });

    
}

getCapiAbbigliamento()





