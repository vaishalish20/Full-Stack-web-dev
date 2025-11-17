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
