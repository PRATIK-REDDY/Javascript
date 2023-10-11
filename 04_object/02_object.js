// here you learn about how to dclear object in singleturn and by using constructor

// here you create empty object using new keywork know as singleturn object

const user = new Object()   // singleturn object.

// you can also declear this way also
// const user1 = {}   // both are simillar but it is non-singleturn object

// console.log(user1);


// here you add the values

user.id = "67pr"
user.name = "reddy"
user.isLoggedin = false

// console.log(user);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// here you create oject under object

// const user2 = {
//     email: "sperie@gmail.com",

//     fullname: {
//         userfullname: {
//             firstname: "reddy",
//             lastname: "pratik"
//         }
//     }
// }


// console.log(user2.fullname.userfullname.firstname);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// here you merge tow object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// if you do this then it show the same problem while you facing in array
// const obj3 = {obj1, obj2}

// console.log(obj3);


// therefore you in object case you use (---- assign({}, obj1, obj2)---- {} it is optional but good to use)
// syntex of assign(target({}), source(like obj1,obj2....))

// const obj4 = Object.assign({}, obj1, obj2)


// here you spread the object using (...) operator

const obj6 = {...obj1, ...obj2}
console.log(obj6);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sometime you receive the data form database in an array form who contain many objects

const dataBaseData = [
    {
        email: "pratik@gmail.com",
        name: "reddy"
    },
    {
        email: "pratik@gmail.com",
        name: "reddy"
    },
    {
        email: "pratik@gmail.com",
        name: "reddy"
    }
]

// console.log(dataBaseData[1].email);  // by this way you can access any of the object value in array

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if you only keys of an object the use .keys keyword

console.log(Object.keys(user));  // it return the result in array after that you can perform any type of operation (loops, etc)

// you can also get values
console.log(Object.values(user));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// here you see two more methos

// 1. entries() which help to convert each key values pair into array

console.log(Object.entries(user));

// 2. hasOwnProperty help to check an object having property or not(empty)

console.log(user.hasOwnProperty('name')); // it return boolean value
