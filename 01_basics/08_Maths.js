
// Here you talk about Maths in JS

// console.log(Math) // here you not very much

// -------------------------------------------------------------------------------------


// here you discuss some common math methods are used

// here you use absolute method

// some time you have -ve value in project.
// absolute method is use to change the sign of that value. (only -ve sign change not +ve sign always +ve)

// console.log(Math.abs(-5))
// console.log(Math.abs(5))

// -----------------------------------------------------------

// round method (help to remove decimal and give the roundoff values)

// console.log(Math.round(5.7))
// console.log(Math.round(2.3))

// here you learn about (ceil(choose always top value) and floor(choose always lower values)) to control the round method

// console.log(Math.ceil(7.2));
// console.log(Math.floor(6.8));


// -------------------------------------------------------------------------------------------------


// learn about min and max method

// console.log(Math.min(2,3,4,5))
// console.log(Math.max(2,3,4,5))


// ------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


// here you learn about important method in Math ------> random() method( This method give random value between 0 to 1)

console.log(Math.random());

// if you want values between 1 to 10 then multi with 10

console.log((Math.random() * 10) + 1)
console.log((Math.random() * 10) + 1)

// here you add 1 because to avoid (case like 0.01)


// you wnat the values with in some range then

let min = 20
let max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)