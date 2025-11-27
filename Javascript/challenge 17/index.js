// Try to modify the expression so that we get a range from 1 to 6

let randomNumber = Math.floor(Math.random() *6 ) + 1;
console.log(randomNumber);

// challenges: final
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

