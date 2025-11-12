//challenge-1 (Variables practice)

// create two variables: firstName and lastName
let firstName="noddy"
let lastName="cartoon"

// Concatenate the two variables into the third variable called fullName
let fullName = firstName + " " + lastName;

// Log the fullName on console
console.log(fullName);

// ====================================================================
//challenge-2(Concatenate two strings)

let name= "Linda"
let greeting="Hi there"

// create a function that logs out "Hi there, Linda!" when called

function greet(){
    console.log(greeting + ", "+name+ "!");
    
}

greet();

// ===================================================================
//challenge-3 (Increment and decrement)

let myPoints = 3;
// create two function,add3Points() and remove1Point() and have them 
// add/remove points to/from myPoints variable
function add3Points(){
    myPoints+=3;
}
function remove1Point(){
    myPoints-=1
}

add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point()
// 3+3+3+3=12-1=11-1=10
// Call the functions to that the line below logs out 10
console.log(myPoints);
