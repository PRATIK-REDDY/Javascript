const form = document.querySelector('form')

form.addEventListener('click', function (e) {
    e.preventDefault();

    // here you get the value height and weight 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    // here you use some check
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please Enter your currect height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please Enter your currect height ${weight}`
    } else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`

    }

})
