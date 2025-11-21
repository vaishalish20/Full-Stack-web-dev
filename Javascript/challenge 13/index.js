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
console.log(n);

// console log the messages array using loop
for (let i = 0;i < n ; i++){
    console.log(messages[i]);
}