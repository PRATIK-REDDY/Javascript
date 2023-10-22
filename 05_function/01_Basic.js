// Here you learn about function

function print() {
    console.log("P");
    console.log("r");
    console.log("t");
    console.log("i");
    console.log("k");
}

// function constain 
// 1. function (keyword)
// 2. name of the function along with () where you pass the formal argument


// this is function Reference (means address)
// console.log(print);  // nothing will hanppen 

// if you call the function like
// console.log(print());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function add(a, b) {
    let result;

    result = a + b
    // if you not use the return keyword it show undefine (return is important in Js)
    return result
}


let result = add(1, 2);

// console.log(result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// here you learn about important operator know as rest and sprade operator ( look like (...)) it behave different way in diff places.
// Here (...) operator works is to convert all the values given by the user into array

function cartApp(...product) {
    return product
}

// console.log(cartApp(1, 2, 3, 4));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// here you preform object with function

const objectname = {
    name: "pratik",
    lnumber: 18
}


// deal with function
function objectFunction(objectname) {
    console.log(`Username is ${objectname.name} and locky number is ${objectname.lnumber}`);
}

// objectFunction(objectname)
