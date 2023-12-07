interface ISim {

    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro: number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(mins:number):void;
    azzeraChiamate():void;

}

class Smartphone implements ISim {


    constructor(

        public carica:number = 0,
        public numeroChiamate:number = 0,
        public costoMinuto:number = 0.15,

    ){}

    ricarica(euro:number):void{

        this.carica += euro;

    }

    numero404():string {

        return `Il credito residuo è di ${this.carica} euro`

    }

    getNumeroChiamate():number {

        return this.numeroChiamate;

    }


    chiamata(mins:number):void {

        this.numeroChiamate += 1;
        this.carica -= (mins * this.costoMinuto)

    }

    azzeraChiamate():void{

        this.numeroChiamate = 0

    }


}

let user1Smartphone:Smartphone = new Smartphone();
let user2Smartphone:Smartphone = new Smartphone();
let user3Smartphone:Smartphone = new Smartphone();

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




