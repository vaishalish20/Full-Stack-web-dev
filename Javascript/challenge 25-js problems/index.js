// challenge 1: let and const
// SETTING THE STAGE
const player = "Noddy"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// challenge 2: log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function traverse(arr) {
    for (let i = 0;i< arr.length ; i++){
        console.log(arr[i]);
    }
}

traverse(myCourses)

// challenge 3 : save to localStorage 

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("myName","Noddy")
localStorage.setItem("myMessage","Hello World")
let messageValue = localStorage.getItem("myMessage")
console.log(messageValue);


// challenge 4 : addEventListener and objects in array

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const logBtn =  document.getElementById("log-btn")

logBtn.addEventListener("click",function(){

  let winnerScore = data[0].score
  console.log(winnerScore);
})