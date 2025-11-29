// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let boxEl = document.getElementById("box");

boxEl.addEventListener("click",function(){
    console.log("I want to open the box!");
    
})

//learning about let and const

const playerNumber = "Noddy";
let credits = 44;

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520   //should be const
const discount = 120 //should be const
let shippingCost = 12  
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
// note: here fullPrice is not assigned further so it can be changed to const because value is fixed.
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)