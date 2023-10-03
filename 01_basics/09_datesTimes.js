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

// here you create own date also in diff formet

let myCreatedDate1 = new Date("2023-01-14");

console.log(myCreatedDate1);

// -------------------------------------------------------------------

// here you discuss about timeStamp import function in data and time

let myTimeStamp = Date.now();

// console.log(myTimeStamp);   // this give the time value in mili sec
// console.log(myCreatedDate.getTime());


// if you want to convert this mili sec value in sec

console.log(Math.floor(Date.now()/1000));