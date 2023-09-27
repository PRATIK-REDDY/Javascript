// here you learn about Number used in JS

// for example

const score = 200 // Here Js take the score as int type
console.log(score)

// ---------------------------------------------------------------------------------

// if you want to declar explicitly then: -

const balance = new Number(100)
console.log(balance)

// here you see some methods of Number type

// here you use the toString() which convert intiger to String formet
console.log(balance.toString().length);

// console.log(typeof(balance))


// -------------------------------------------------------------------------------

// here you use the toFixed method to fix the precision values

console.log(balance.toFixed(3))


// here you use toPrecision method

const otherNumber = 789.665

console.log(otherNumber.toPrecision(3))

// ----------------------------------------------------------------------------------


// suppose one number is given like this ---> 1000000000 to counts this zeros use toLocaleString('en-IN') (means arrange the zeros in indian format)
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
