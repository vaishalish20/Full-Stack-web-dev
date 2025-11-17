// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 10;
let secondCard = 2;
// 2. Create a variable, sum, and set it to the sum of the two cards.

let sum = firstCard + secondCard

// if else logic
if (sum < 21){
    console.log("Do you want to draw a card?");
}else if(sum === 21)
{
    console.log("You win!");
}else{
    console.log("You are out of game.");
    
}

// Next Challenge
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if(age < 21){
    console.log("You can not enter the club!");
}else{
    console.log("Welcome!");
}





// Next Challenge
// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if(age < 100){
//     console.log("Not elegible");
// }else if(age === 100){
//     console.log("Here is your birthday card from the King!");
// }else{
//     console.log("Not elegible, you have already gotten one");
// }