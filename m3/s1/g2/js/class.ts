class SonAccount{
    
    constructor(){

        this.balance = 0;

    }

    balance:number = 0


    deposit(s:number):void{

       this.balance += s;

    }
    widthDraw(s:number):void{

        this.balance -= s;

    }
    
    

}

    let sonAccount:SonAccount = new SonAccount();
    
    sonAccount.deposit(100)
    sonAccount.widthDraw(35)
    console.log(sonAccount.balance);

    class MotherAccount extends SonAccount{

            addInterest():void{

            this.balance *= 1.1;
    
        }

    }

    let motherAccount = new MotherAccount();

    motherAccount.deposit(100)
    motherAccount.widthDraw(35)
    motherAccount.addInterest()
    console.log(motherAccount.balance);


