// const exerciseTimeMins = 20;

// Doing it with if-else statement
// let message = ''

// if (exerciseTimeMins < 30){
//     message = 'You need to work harder'
// }else{
//     message = 'Doing Good'
// }

// Doing the same thing with ternary operator
// const message = exerciseTimeMins < 30 ? 'You need to work harder':'Doing Good';
// console.log(message);

// Note: Syntax of the Ternary Operator

// condition if true expression1 and if false expression2
// condition ? expression1 : expression2 

// ==========================================================
// Ternary Operator but with complexity
// let message = ''

// if (exerciseTimeMins < 30){
//     message = 'You need to work harder'
// }else if(exerciseTimeMins < 60){
//     message = 'Doing Good'
// }else{
//     message = 'Excellent!'}

// const message = exerciseTimeMins < 30 ? 'You need to work harder': (exerciseTimeMins < 60 ? 'Doing Good':'Excellent!');
//     console.log(message);

// Note: With multiple condition, it is better to use if-else as that will be easier to read.
// Above terniary is okay, but not readable if add more conditions.