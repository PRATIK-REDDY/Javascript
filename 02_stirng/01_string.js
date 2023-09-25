// Here you learn about string in Js

// string mean a series of character which you write in between '' or "".

// for ex - small operation you will do

// const n1 = "pratik"

// const n2 = "reddy"

// console.log(n1 + n2)  // This is the old way of String concadination in JS.


// ------------------------------------------------------------------------------------------


// The new way is using backtik (``) simillar as placeholder what ever you write in between the backtik

// Here ${} is help inject the variable in JS similler as String concadination and easy way make a sentence

// let name = "Pratik"
// let place = "Odisha"

// console.log(`Hello my name is ${name} and i am from ${place}`) // This way morden writing is known as String intropolation

// -----------------------------------------------------------------------------------------------------------

// In string all the value are in the form of (key value pair) like

const game = new String('pratik')

// here string store the values

// 0: "p"
// 1: "r"
// 2: "a"
// 3: "t"
// 4: "i"
// 5: "k" 

// here 0 to 5 is not an index value you don't thing it is an array it is form of (key value pair)

// In String there are many method are present. which will be used for different operation (all these method we see in console) --> execute this -> const game = new String('pratik') and after access game

// -----------------------------------------------------------------------------------------------------------------

// here you preform some method( we also called function ) operation 

console.log(game[0])                    // here you access the perticular char of the String
console.log(game.length);               // here you get the length of the String

console.log(game.toLowerCase());        // Converting the String into lowercase
// (here after coverting in lowercase the original value is not change the copy of the value in stack will change because in Js String is a primitive value)

console.log(game.charAt(2));            // This method is used to find in which index what value is present

console.log(game.indexOf('t'));         // this method is used to find the char is present in which index

// ------------------------------------------------------------------------------------------------------------------------------------

// some complex String methods


// Here you preform the substring method
const newString = game.substring(0, 3) 
console.log(newString)



// here you presorm the slice method ( only in slicing you use the -ve values and subString() not accept the -ve values )
const anotherString = game.slice(0, 3)  // If you give -ve value here it preform like reverse
console.log(anotherString)



// here you use trim method (trim method is used for cutting the extra space which user give in input Like :-
const newString2 = "     reddy     "    // here extra spaces are cutted by trim method
console.log(newString2.trim());
// you also see the normal way
console.log(newString2);



// here you use the replace method
const url = "https://pratikreddy.com/pratik%20reddy"

console.log(url.replace('%20', '-'))
// here you includes method use to check the word is present or not (it return the result in form of boolean (true (if the String is present) and false))
console.log(url.includes('pratik'))




// here you use split method
console.log(url.split('.'));    // By following the (.) it split the String




// many othermethods are there



// The simple way do mastery in String method is goto browser console and String preform ( Like -> (const game = new String('pratik') and after access game) ) an operation learn more about the methods
// If you do not know who to use any method then simple Google it.

