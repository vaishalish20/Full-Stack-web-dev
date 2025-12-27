//hoisting means moving the variable and function declaration at the top.
sayHello()

function sayHello(){
    console.log('hello');
    
}

// sentence is declare but at console log, it does not know the its initializing value, so got an error.
console.log(sentence);

const sentence = 'Hello, my name is Ash'
