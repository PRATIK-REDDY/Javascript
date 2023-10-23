// here you learn about ( this keyword ) in JS

// this -----> basically used the fectch the current contexts of any thing ( like object, funtion, array ...)

const arrow = {
    name: "pratik",

    welcomeMess: function () {
        console.log(`${this.name} , welcome`);
        // console.log(this);
    }
}

// arrow.welcomeMess()
// arrow.name = "reddy"
// arrow.welcomeMess()


// console.log(this);  // here you get {} empty object

// but with in a function
function funThis() {
    console.log(this);
}

// funThis()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// here you learn about array function

// simple declear of arrow fun

const arrowFun = () => {
    let username = "pratik"
    console.log(this.username);  // it will thorw undifined
}

console.log(arrowFun());


// In arrow function two types of return is there



