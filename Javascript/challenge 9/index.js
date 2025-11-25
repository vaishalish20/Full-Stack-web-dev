// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 10;
let secondCard = 1;
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards= [firstCard , secondCard]
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
let messageEl = document.getElementById("message-el");

// 2. Store the sum paragraph in a variable called sumEl
// let sumEl=document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")

// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
// 3. Render the cars on the page using this format -> "Cards: 10 4"

// Create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame()
}
// 3. Render the sum on the page using this format -> "Sum: 14"
function renderGame() {
    if (sum <= 20) {
        // console.log("Do you want to draw a new card? 🙂");
        message = "Do you want to draw a new card?";
        sumEl.textContent = "Sum: " + sum;
        // 2. Refer to the cards array when rendering out the cards
        // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
        cardsEl.textContent = "Cards: ";

           // Create a for loop that renders out all the cards instead of just two
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]
    }
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

 

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 2;
    // Push the card to the card array
    cards.push(card)
    // 2. Add the new card to the sum variable
    sum +=card;
    // 3. Call startGame()
    startGame()
}
