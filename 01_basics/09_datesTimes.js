// here you learn about Date in Js

let myDate = new Date()

console.log(myDate) // after check in this formet is not readable form

// here you convert this formet to string using toString() method

console.log(myDate.toString())

// simillar to findout data and time other method are there also

// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleString())

// always date type is object
console.log(typeof myDate);


// ------------------------------------------------------------------------

// if you want to create your own date use date()

let myCreatedDate = new Date(2023, 6, 12)

console.log(myCreatedDate)  

// In Js month always started form 0 to 11.

// when even you face any difficulty to read any date then use toString() method

console.log(myCreatedDate.toString())