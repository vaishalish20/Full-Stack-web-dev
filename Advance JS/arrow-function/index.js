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
const getSpendAlert = (name, amount) => {
    return `Warning!, ${name} just spent $${amount}`
}
console.log(getSpendAlert('noddy',300));

//Note: 
// when we have one parameters we do not need brackets
// when we have  0 or 2 parameters, we need brackets