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

// -------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------


// 2. Non-Primitive datatype (These all non - primitive datatypes are call by reference)

// types - Array, Object, functions


// 1. Array

// In JavaScript, an array is a special kind of object that can be used to store and manipulate ordered data items. Arrays are zero-indexed, meaning that the first element of an array is at index 0, the second element is at index 1, and so on.

// const heros = ["pratik", "pradyot", "reddy"]


// ------------------------------------------------------------------------------------------------------------------------------------


// 2. Object

// In JavaScript, an object is a collection of properties. Properties are named values that are associated with an object. Objects can be used to represent a wide variety of things, such as people, places, things, or events.


// The object in Js are always in key values pairs

// for example

// let myobj = {
//     name: "pratik",
//     age: 22
// }

// with in the {} all are object

// ------------------------------------------------------------------------------------------------------------------------------------


// 3. Functions

// A function in JavaScript is a block of code that performs a specific task. Functions are defined using the function keyword, followed by the name of the function and a list of parameters in parentheses. The function body is written inside curly braces.


// In js function dclearation is

// function() {}

// you can also store in variable like

// const myfunction = function() {
//     const.log("pratik reddy")
// }


// if you want to check of any variable datatype one function is use is (typeof)

// console.log(typeof bigNumber)


// dataype checking unsing typeof

// undefined   ----->  "undefined"
// Null         ---->   "object"
// boolean      ---->   "boolean"
// Number       ---->   "number"
// BigInt       --->    "undefined"
// String       ---->   "string"
// Symbol       ---->   "Symbol"
// function     ---->   "function" (basically called object function)