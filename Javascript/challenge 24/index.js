const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
// note; providing this function multiple parameters

// adding template literals to avoid + when adding more variables
// add the ability to add an emoji too to this function
function greetUser(greeting,username, emoji){
    welcomeEl.textContent = `${greeting} ${username} ${emoji}`;
}

greetUser("Hello","Noddy","👋");

// ======================================================================================

// Nuumber as function parameters

// create a function add() that add two number together and returns the sum.

function add(num1, num2) {
    return num1 + num2;
    
}



console.log(add(3,4));     //should be 7
console.log(add(9,102));   //should be 111


// ============================================================================

// Parameters vs Arguments

//  Parameters = used in function definition (inside of a function)
// Arguments = used in function Invoke or call (outside of a function)



// what are greeting and name ?     Ans = parameters
// what are "Hello" and "Noddy"     Ans = arguments
// what are num1 and num2           Ans = parameters
// what are 3 and 4                 Ans = arguments