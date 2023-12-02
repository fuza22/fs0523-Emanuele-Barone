function randoms (v1:number, v2:number){

    let randomNumber:number = Math.floor(Math.random() * 100) + 1;
    let firstDiff:number = Math.abs(v1 - randomNumber);
    let secondDiff:number = Math.abs(v2 - randomNumber);
    
    console.log("Player 1 choose: " + v1);
    console.log("Player 2 choose: " + v2);
    console.log("Random number is: " + randomNumber);
    
    
    

    if (v1 < 0 || v2 < 0 || v1 > 100 || v2 > 100) {

        alert ("Choose a number between 0 and 100");

    }

    if (v1 == randomNumber){

        return "Player 1 has won!";

    }

    if (v2 == randomNumber){

        return "Player 2 has won!";

    }

    if (firstDiff < secondDiff){

        return "Player 1 came closer than Player 2";

    }
    
    if (secondDiff < firstDiff){

        return "Player 2 came closer than Player 1";

    }


}

console.log(randoms(15,45));
