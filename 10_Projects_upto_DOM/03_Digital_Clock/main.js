const clock = document.querySelector('#clock');



// here you want run the time in ever second using setInterval() which take two parameter

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)    