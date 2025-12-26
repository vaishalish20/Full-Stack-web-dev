// Date constructors
const dateSnapshot = new Date()

// console.log(dateSnapshot);
// console.log(dateSnapshot.toString());
// console.log(typeof dateSnapshot);


// Challenge :Find how to console log year from Date consturctor
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`);


// Error constructors

// function yourName(userName){
//     if(userName){
//         console.log(userName);
//     }else{
//        // console.log('No user name entered');
//        console.log('executed');
//        throw new Error('No username entered')
//        console.log(' not executed');
        
//     }
    
// }

// yourName()
//Note: throw new Error will give error and no other statment after throw statement.

//Datetype constructors

String()
Number()
Array()
Object()
Boolean()

// const person = new Object()
// Above syntax is rear,we use the following object literal
const person = {}
person.name = 'Tom'
console.log(person);

