// Here you learn about object in javascript

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===


// An object in JavaScript is a data type that represents a collection of data pairs, or properties. The keys of the pairs can be strings or symbols, and the values can be any type of data. Objects are created with curly braces, and the properties are separated by commas.

// Ex ->

// const person = {
//     name: "John Doe",
//     age: 30
// };



// --------------------------------------------------------------------------------------------------------------------------------

// In Js you can declare the object in two ways

// 1. oject literals
// 2. singleton ----> (means through Constructor)


// ===========================================================================================================

// Here you talk about oject literals

// you represent the object in Js by  {} ------> ( means simply it is a empty object )

// Note ----> here you use unique premitive datatype known as Symble

// The task is to first declare the Symbol and use as a key in object
const myKey = Symbol("Key1")

// here key is one type of String you say and values what ever type of data you want to give
const Reddy = {
    name: "pratik",
    age: 22,
    location: "bhawanipatna",
    email: "werafe@gmail.com",
    [myKey]: "Mysymbol"
}


// here you see how to access the object or object properties

console.log(Reddy.age) // But this is not good way to access object

// Good way is with in [""]

// console.log(Reddy["name"])
// console.log(Reddy["myKey"])

// console.log(Reddy)

// -------------------------------------------------------------------------

// Here you change the values of object by the help of ( = ) operator you can override

// Reddy.name = "Pradyot"

// console.log(Reddy["name"]);


// -------------------------------------------------------------------------------------

// you can freeze an object using freeze() therefore no body can change the values like
// Syntex is

// Object.freeze(Reddy)

// if you make any change then you can't get any error but the changes are not applicable.....you can try


// ----------------------------------------------------------------------------------------------

// here you declare a function in your object

Reddy.myFunction = function() {
    console.log("my name is pratik");
}

// access the function

console.log(Reddy.myFunction());


// ----------------------------------------------------------------------------------------------------------

// Here you the properties of an object in String then follow 2 stpes
// 1. converted into ``
// 2. use ${oject propertie}

Reddy.myFunctiontwo = function() {
    // --------------the converting the String to (``) process known as String imtorpolation---------------
    console.log(`my name is ${this.name}`);
}

console.log(Reddy.myFunctiontwo());