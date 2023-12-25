// first we select all button
const button = document.querySelectorAll('.button');
console.log(button);

// In this project we use the body therefore we select body
const body = document.querySelector('body')
console.log(body);


// here you use eventListener because we preform some event on button

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);

        switch (e.target.id) {
            case 'orange':
                body.style.backgroundColor = "rgb(243, 166, 25)"
                break;
            case 'blue':
                body.style.backgroundColor = "rgb(149, 209, 241)"
                break;
            case 'white':
                body.style.backgroundColor = "white"
                break;
            case 'green':
                body.style.backgroundColor = "rgb(45, 222, 45)"
                break;
        }
    })
})