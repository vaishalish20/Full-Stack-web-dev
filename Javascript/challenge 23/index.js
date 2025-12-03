console.log(  Boolean("")   ) //  falsy
console.log(  Boolean("0")  ) // truthly
console.log(  Boolean(100)  ) // truthly
console.log(  Boolean(null) ) // falsy
console.log(  Boolean([0])  ) // truthly
console.log(  Boolean(-0)   ) // falsy

// Note: following values are falsy

// 0
// null   --empty value accoring to developers
// NaN
// "" //empty string
//false
//undefined  --empty value according to js

// note to check if any string or thing is truthly or falsy
// then use the follwoing:

// let variable = Boolean("0")

// console.log(variable);

