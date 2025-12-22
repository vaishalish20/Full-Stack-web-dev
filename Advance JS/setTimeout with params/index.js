function displayTrafficLights(light){
    console.log(light);
    
}


setTimeout(displayTrafficLights ,3000 , '🟢')
displayTrafficLights('🔴')

// =============================================
// challenge

function logAnswer(name,points){
    console.log(`The answer is ${name} of course! If you got that right, give yourself ${points} points`);
    
}

setTimeout(logAnswer, 3000, 'Lima','10')
console.log('What is the capital of Peru?');

// 1. after a 3 second delay, call the 'logAnswer' function.
// 2. Make sure logAnswer has all the info it needs

// The answer is 'Lima' and it's 10 points for gettting it right.