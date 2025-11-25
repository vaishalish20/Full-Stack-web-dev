let player1Time = 101
let player2Time = 10

function getFastestRaceTime(){
    if(player1Time < player2Time){
        return player1Time;
    }else if(player2Time < player1Time){
        return player2Time;
    }else{
        return player1Time;
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime(){
    return player1Time + player2Time;
}

let totalTime = totalRaceTime();
console.log(totalTime);

// ===================================================================

// let randomNumber=Math.random();
// let randomNumber=Math.random() * 6;   // 0 -5.999
// console.log(randomNumber);     //0- 0.99

// Note: It will randomly generate a number from 0 to 1(not including 1).

// ======================================================
// let flooredNumber = Math.floor(3.45632)
// let flooredNumber = Math.floor(randomNumber)  //0-5

// console.log(flooredNumber)

// Note: It will round off the number

// ================================================
// To generate random number for a dice 1 to 6

// let randomNumber=Math.floor(Math.random()*6) + 1;
// console.log(randomNumber);

// creating a function rollDice() that will generate a random number from 1 to 6

function rollDice(){
let randomNumber=Math.floor(Math.random()*6) + 1;
return randomNumber;
}

console.log(rollDice());
