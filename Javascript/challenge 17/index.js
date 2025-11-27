// Try to modify the expression so that we get a range from 1 to 6

let randomNumber = Math.floor(Math.random() *6 ) + 1;
console.log(randomNumber);

// challenges 1: objects and functions
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
    name : "Noddy",
    age : 20,
    country : "Toyland"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 

function logData(){
    let string = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(string);
    
}
// "Noddy is 20 years old and lives in Toyland"

// Call the logData() function to verify that it works
logData();

// challenge 2" if-else

let age = 0

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
if(age < 6 ){
    console.log("free");
    
}else if(age >= 6 && age <= 17){
    console.log("child discount");
    
}else if(age >= 18 && age <= 26){
    console.log("studnet discount");
    
}else if(age >=27 && age<= 66){
    console.log("full price");
    
}else if(age >= 66){
    console.log("senior citizen discount");
    
}

//challenge 3:for loop

let largeCountries = ["China","India","USA","Indonesia","Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

for(let i=0; i<largeCountries.length; i++){
    console.log(largeCountries[i]);
    
}