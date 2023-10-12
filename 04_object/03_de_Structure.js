// here you learn object de-structuring in Js always hanppen in react js project
// when ever you receive an object you just de-structure it an get the values and applies in loops or etc...

const course = {
    coursename: "learning Js",
    price: "0",
    courseInstructor: "pratik"
}

// In simple way to access an object element is:
// but in this way is not right write the code like (course.courseInstructor) to access

console.log(course.courseInstructor);


// therefore you use de-structure way in object to access the element

const {courseInstructor: Instructor} = course
console.log(Instructor);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// here you learn about small porson of API


// An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate and interact with each other. 
// It defines the methods and data formats that applications can use to request and exchange information, services, or functionality

// APIs enable developers to access specific features or data from other applications, services, or platforms, making it easier to build and integrate software systems and create more versatile and interconnected applications.

// early days API responce the data in the form of XML. But recent days return the data in form of JSON (JavaScript Object Notation) formet.


// json formet is like :-

// both json and object look like simillar but object store in a variable and json is not
// -----------------------another diff is in json (keys and values) both are String---------------------------------

//  {
//    "name": "pratik",
//    "address": "ganjam"
//  }


// sometime you receive the json data in form of array which contain many object data like

// [
//     {},
//     {},
//     {}
// ]