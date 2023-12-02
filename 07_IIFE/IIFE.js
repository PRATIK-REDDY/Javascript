// Immediately Invoked Function Expressions (IIFE)

// 1. sometime the globalscope( mean global variable ) make disterbance( mean problem of some function ) to restrict this you use -----> IIFE

// 2. and another resion is if you want to execute any function innediately then use IIFE ( like database connection function )


// you write the IIFE function by using ()()

// 1. () -----> contain function
// 2. () -----> means function calling (execution you can pass the argument also)

(function print() {
    console.log("my name is pratik");
})();

// but if you write morethen one IIFE function then use ';' to end one IIFE function otherwise you get a problem

// we also use arrow fun in IIFE

((name) => {
    console.log(`my brother name is ${name}`);
})('pradyot')



