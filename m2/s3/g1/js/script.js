class User{

    constructor(_firstName, _lastName, _age, _location){
    
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    
    }

    ageDifference(User){

        if(this.age > user.age){
            console.log(`${this.firstName} is older than ${user.firstName}`)
        }else if(this.age < user.age){
            console.log(`${user.firstName} is older than ${this.firstName}`)
        }else{
            console.log(`${this.firstName} is the same age as ${user.firstName}`)
        }
    }
}

let user1 = new User('Emanuele', 'Barone', 27, 'Palermo');
let user2 = new User('Emilio', 'Plances', 26, 'Palermo');

user1.ageDifference(user2);

/*---------------------------------*/

class Pets{

    constructor(_petName, _ownerName, _species, _breed){

        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;

    }

    sameOwner(pet){
    
        if(this.ownerName === pet.ownerName){

            return true;

        }else{

            return false;
        }
    }
}

let pet1 = new Pets('Luna', 'Emanuele', 'dog', 'Labrador');
let pet2 = new Pets('Luna', 'Mauro', 'dog', 'Pitbull');

pet1.sameOwner(pet2);
console.log(pet1.sameOwner(pet2));
