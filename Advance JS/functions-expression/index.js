const funExp = function(){
    return "hello world";
    
}

console.log(funExp());

/*
Task:
Create a function expression that:
Takes two numbers as parameters
Returns the larger number

Rules:
Use const
Do not use arrow functions
Call the function and log the result
*/

const returnLarge = function(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}

console.log(`large number is ${returnLarge(2,4)}`);
