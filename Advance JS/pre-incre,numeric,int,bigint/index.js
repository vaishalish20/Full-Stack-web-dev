
number = 0;
// console.log(number++);
// console.log(number);
//following is the pre incremental operator
console.log(++number);

// number seperators(_)
//note: adding number seperator(_) still make it as number
// following is max safe integer in js, greater than this will be bigint
const n = 9_007_199_254_740_991
console.log(n);

// Bigint can not be used with other int values, can be added or subtracted.
// These are basically used for cryptography or database that uses large integer identifiers.