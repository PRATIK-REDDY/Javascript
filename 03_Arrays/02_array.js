// here you learn some advance array method which is used in librabry and frameworks....

const marvel_heros = ['thor', 'Iroman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']


// marvel_heros.push(dc_heros)  // here you think both array are marge but not here one array comes under another array
// console.log(marvel_heros);



// here you use concat method of array

// here concat method merge two array and return an new array.
const new_marvel = marvel_heros.concat(dc_heros)
console.log(new_marvel);


// here you learn spared operator which works is as concat means it spare the all the element of both the array into single array (divided into one...one element)
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// here you learn about flat method in array 

// const another_array = [1,2,3, [1,2,3], 7, [6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// -----------------------------------------------------------------------------------------------------

// here you learn about important method to deals with any typing data you fect( that all object are in form of (object, string, ...)) and you also convert in the form of an array (because then you apply the loop concept)

// if you want to check any data in the form of array or not
console.log(Array.isArray("pratik"))  // here you ask give string in the form of array or not

// if you want to convert some other data converted into array then you do

const name = "reddy"
console.log(Array.from(name))   // here you pass directly data also


// if you want to convert multipul variable into array

let score1 = 1
let score2 = 2
let score3 = 3

// using 'of' also you can create array 
console.log(Array.of(score1, score2, score3));


