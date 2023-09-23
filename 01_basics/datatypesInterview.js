// Here you learn more about datatype for interview 

// Datatypes in Js are two type

// 1. Primitive datatype (These all primitive datatypes are call by value)

// these types are - Number, String, boolean, null, undefined, Symbol (it help of make unique), BigInt

// In Js both are take as Number Type only
// const score = 100
// const anotherscore = 100.2

// --------------------------------------------------------------------------------------------------------------------------

// for null and undefined type

// null declear
// const r = null; // simple
// let t;          // here you declear the variable but you not assign the value is know as undefined

// ----------------------------------------------------------------------------------------------------------------------------------

// 1.1 Js is static or dynamic programming language

// JavaScript is a dynamically typed language. In a dynamically typed language, the data type of a variable is determined by the value that it is assigned, rather than by the variable itself. This means that the type of a variable can change over the course of a program. For example, you could assign a string to a variable, and then later assign a number to the same variable. The variable would then have a type of "number," even though it originally had a type of "string."
// Dynamically typed languages are often considered to be more flexible than statically typed languages, because they allow developers to change the types of variables without having to change the code. However, this flexibility can also lead to errors, because it can be difficult to keep track of the types of all of the variables in a program.
// There are a number of statically typed extensions of JavaScript, such as TypeScript, that can be used to improve the reliability of JavaScript code. These extensions allow developers to annotate the types of variables, which helps to prevent errors at runtime.Ask a follow up

// --------------------------------------------------------------------------------------------------------------

// 1.2 here you discuss about Symbol datatype

// A symbol in JavaScript is a primitive data type that represents a unique identifier. Symbols are created with the Symbol() function.
// Symbols are a powerful tool that can be used to improve the security and readability of JavaScript code.

// for example

// const Id = Symbol('123')
// const anotherId = Symbol('123')

// here you assign the same value using Symbol to variable but if you compare

// console.log(Id === anotherId) // false

// --------------------------------------------------------------------------------------------------

// here you learn about Bigint

// BigInt is a new data type introduced in JavaScript to represent whole numbers larger than the range supported by the Number primitive. The largest number that JavaScript can reliably represent with the Number primitive is 253-1, which is represented by the MAX_SAFE_INTEGER constant.

// for example

// const bigNumber = 354268298476282



// 2. Non-Primitive datatype (These all non - primitive datatypes are call by reference)

// types - Array, Object, functions