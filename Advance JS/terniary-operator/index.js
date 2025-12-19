const exerciseTimeMins = 50;

// Doing it with if-else statement
// let message = ''

// if (exerciseTimeMins < 30){
//     message = 'You need to work harder'
// }else{
//     message = 'Doing Good'
// }

// Doing the same thing with ternary operator
const message = exerciseTimeMins < 30 ? 'You need to work harder':'Doing Good';
console.log(message);

// Note: Syntax of the Ternary Operator

// condition if true expression1 and if false expression2
// condition ? expression1 : expression2 