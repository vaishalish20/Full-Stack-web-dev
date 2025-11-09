// creating a function that logs out the sun of all the lap times.

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumOfLaps(){
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
    
}

sumOfLaps()

// Note: the global scope can be accessed from outside to inside of functions where as local variable can not be accessed from inside of a function to outside of a function.
// Example:
// Global variable: lap1, lap2 ,lap3
// Local variable: sum