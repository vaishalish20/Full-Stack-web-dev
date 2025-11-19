// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 10;
let secondCard = 22;
// 2. Create a variable, sum, and set it to the sum of the two cards.

let sum = firstCard + secondCard;

// if else logic challenge
// if (sum < 21){
//     console.log("Do you want to draw a card?");
// }else if(sum === 21)
// {
//     console.log("You win!");
// }else{
//     console.log("You are out of game.");

// }

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// 1. Create a variable called isAlive and assign it to true
// 2. Flip its value to false in the appropriate code block 
// 3. Log it out to check that you're doing it right

let isAlive = true;

// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out
// 3. Log it out!
 let message = ""


 // 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.


// 1. Store the message-el paragraph in a variable called messageEl
let messageEl=document.getElementById("message-el");

// 2. Store the sum paragraph in a variable called sumEl
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector(".sum-el")
 // 3. Render the sum on the page using this format -> "Sum: 14"
function startGame(){
    if (sum <= 20) {
        // console.log("Do you want to draw a new card? 🙂");
        message = "Do you want to draw a new card?";
        sumEl.textContent="Sum: " +  sum;
    } else if (sum === 21) {
        // console.log("Wohoo! You've got Blackjack! 🥳");
        message = "Wohoo! You've got Blackjack!";
    } else {
        // console.log("You're out of the game! 😭");
        message = "You're out of the game!";
        isAlive = false
    }
    // console.log(isAlive);
    // console.log(message);
    // 2. Display the message in the messageEl using messageEl.textContent
messageEl.textContent = message;
}



