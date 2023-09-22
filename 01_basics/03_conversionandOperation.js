// Here you learn about conversion and operation (conversion means coverting one value type to another value type)

// for example

let score = "pratik"

// two ways to checking of type of value
// 1. console.log(typeof score)

// 2. This is using function
// console.log(typeof(score))

// here you preform the conversion
let covertedvalue = Number(score)

console.log(covertedvalue)

// it will give (NaN) it is also a special type


// Notes in conversion

// if you convert --- "33"      => 33 (number)
// if you convert --- "33abc"   => NaN
//                      true    => 1;   false   => 0