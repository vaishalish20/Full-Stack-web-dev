// following is the function expression
// const getSpendAlert = function(amount){
//     return `Warning!, you just spent $${amount}`
// }

//with one parameters
// const getSpendAlert = (amount) => {
//     return `Warning!, you just spent $${amount}`
// }

//with no parameters
// const getSpendAlert = () => {
//     return `Warning!, you just spent some money`
// }
// console.log(getSpendAlert());

//two parameters
// const getSpendAlert = (name, amount) => {
//     return `Warning!, ${name} just spent $${amount}`
// }
// console.log(getSpendAlert('noddy',300));

//also a arrow function example
// const getSpendAlert = (name, amount) => `Warning!, ${name} just spent $${amount}`

// console.log(getSpendAlert('noddy',300));

//Note: 
// when we have one parameters we do not need brackets
// when we have  0 or 2 parameters, we need brackets
// can use return keyword when we want to return one line of code

// challenge 1

// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

// const speedWarning = speed => `You are going at ${speed} mph!`
// console.log(speedWarning(200));

//write least code possible for arrow functions
//arrow functions

//challenge 2 
//refactor the function so it only warns drivers who are going over the speed limit.
//function takes two parameter-first the limit and second is actual driver speed

const speedWarning = (limit, speed) => {
    if (speed > limit)
        return `You need to lower your speed`
    else if(speed < limit)
        return `You going at good speed`
    else
        return `Be carefully`
}

console.log(speedWarning(60,60));
