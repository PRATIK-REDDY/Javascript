// Arrays in JavaScript are a data type that can store a list of values. Each value in the list is called an element, and elements are accessed using numeric indexes. Arrays are zero-indexed, meaning that the first element in the list is at index 0.
// Arrays are a versatile data type that can be used to store a variety of data, such as numbers, strings, objects, and other arrays. Arrays are often used to store data that is related in some way, such as a list of students in a class or a list of items in a shopping cart.

// ----------------------------------------------------------------------------------------------

// here you simple declear an array

const arr1 = ["pratik", "reddy", "pradyot", "reddy"]

// another way is 
const arr2 = new Array(1,2,3,4,5)

// console.log(arr1);
// console.log(arr2);

// here you access the perticular element also by using array indexing concept

// console.log(arr1[1]);



// --------------------------------------Here you learn about Array methods------------------------------

// push method used to add an element in array

// arr1.push(6)   // mandotory to give the argument

// console.log(arr1);



// pop method used remove the last index element form array
// arr1.pop()

// console.log(arr1)


// here you learn about shift and unshift method 

// 1. Unshift(means add the element at begining of array)

// arr1.unshift(9)
// console.log(arr1);


// 2. shift(means remove one element at begining of array)

// arr1.shift()
// console.log(arr1);

// -------------------------------------------------------------------------------------------

// here you learn about indexof method in array

// console.log(arr2.indexOf(4));


// -------------------------------------------------------------------------------

// here you learn about join method in Array

// join is used to add all the element into a String

const newArray = arr2.join()

// console.log(arr2);

// console.log(typeof newArray);   // check the typeof
// console.log(newArray);



// ------------------------------------------------------------------------------------------------------

// Here you learn about (slice, splice) method in array


// console.log("A ", arr2);


// const newarr1 = arr2.slice(1,3);
// console.log(newarr1)


// console.log("B ", arr2);


// const newarr2 = arr2.splice(1,3);
// console.log("C ", arr2);
// console.log(newarr2);


// In JavaScript, the slice() method is used to return a shallow copy of a portion of an array. 
// The splice() method is used to change the contents of an array by adding or removing elements.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



