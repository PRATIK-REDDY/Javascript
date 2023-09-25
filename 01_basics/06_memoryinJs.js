// Here you learn about memory management in Js

// Stack (Primitive), Heap (Non - Primitive)

// example for primitive datatype :-

// In primitive type of value memory assign in stack and if reuse again after creation the changes are preform on a copy of that variable

let myName = "PratikReddy"

let anotherName = myName

anotherName = "reddy"

// See you print both the variable

console.log(myName)
console.log(anotherName)

// for clearification  you take object (non - primitive datatype)

// This non-primitive memory block create in heap memory and return the reference of that object

let userOne = {
    email: "refaku@gmail.com",
    upi: "user@upi"
}

// here you got the reference and what ever you change that changes made in directly on heap place also

// for ex -

let userTow = userOne

userTow.email = "reddy@gmail.com"


// you got the same in both the location why because it takes the reference form heap and what ever the changes it replace at the same time directly

console.log(userOne.email)
console.log(userTow.email)