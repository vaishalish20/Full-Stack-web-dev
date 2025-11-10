// document.getElementById("count-el").innerHTML = 2 ;

// challenge 1
// let myAge=25;
// console.log(myAge);

// we can not console.log first without initilializing.

// let firstnum = 12;
// let secondnum = 18;
// let count = firstnum + secondnum
// console.log(count);

// challenge 2
// let myAge=25;
// let humanDogRatio =7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// challenge 3
// let bonusPoint = 50;
// console.log(bonusPoint);
// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);
// bonusPoint = bonusPoint - 75;
// console.log(bonusPoint);
// bonusPoint = bonusPoint + 45;
// console.log(bonusPoint);

// 50 + 50 = 100 - 75 = 25 + 45 = 70

// steps to perform

// 1. initalize a count as 0
// 2. listen for clicks on the increment button
// 3. increment the count variable when the button is clicked.
// 4. change the count-el in the HTML to reflect the new count

// function increment(){
//     console.log("The button is clicked.");
    
// }

// solution:
// let countOnclick = 0;

// function increment(){
//     console.log(countOnclick);
//     countOnclick = countOnclick + 1;
//     console.log(countOnclick);
//     document.getElementById("count-el").innerHTML = countOnclick;

// }
// ===========================================================
// same solution but with countEl variable

// challenge
// creating variable for saveEl

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increment(){
    // add short hand here
    // count = count + 1;
    count +=1;
    // countEl.innerHTML = count;
    countEl.textContent = count;
}

// save function

function save(){
    // console.log(count);
     let countStr = count + " - ";
    // saveEl.innerHTML += countStr
    saveEl.textContent += countStr

    count = 0;
    countEl.textContent = 0
}

console.log("Let's count people on the subway!");
