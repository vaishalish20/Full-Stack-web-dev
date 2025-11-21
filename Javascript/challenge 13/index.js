// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {

//     console.log(count)

// }

// Challenge - count to 20
// for ( let count = 1;  count < 21;  count += 1 )  {

//     console.log(count)

// }
//challenge - count 10 to 20
// for ( let count = 10;  count < 21;  count += 1 )  {

//     console.log(count)

// }

// for (let i = 0; i < 6; i+=1) {
//     console.log(i);

// }
// note: i can be used again, as it was used inside the for loop, so it is kind of local scope variable
// challenge
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let count = 10; count <= 100; count += 10) {
//     console.log(count);

// }
//==================================================================================
// Arrays and loop
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "Great"
]
let n = messages.length;
// console.log(n);

// console log the messages array using loop
// for (let i = 0;i < n ; i++){
//     console.log(messages[i]);
// }

// =====================================================
let cards = [7,3,9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// for (let i=0;i<cards.length;i++){
//     console.log(cards[i]);
    
// }

// ======================================================
// Array, loops and DOM

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i=0; i<sentence.length;i++){
//     greetingEl.textContent+=sentence[i];
// }

// How do you keep the space between the words if i remove
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

for (let i=0; i<sentence.length;i++){
    greetingEl.textContent+=sentence[i] + " ";
}
