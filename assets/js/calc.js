// Wine Calculator
let boxes = parseInt(document.getElementById('boxes').value)

const notify = document.getElementById('notify')

const liters = document.querySelector('.liters')
const bottles = document.querySelector('.bottles')
const weight = document.querySelector('.weight')


function updateInput(input) {

    if (input > -1 && input < 1001) {

        notify.textContent = 'Select number of cases'

        boxes = input

        liters.textContent = `${boxes * 4.5}L`
        bottles.textContent = `${boxes * 6}`
        weight.textContent = `${boxes * 8.5}kg`
    } else if (input > 1000) {
        notify.textContent = "Please contact us for larger orders"
    }

    else {
        notify.textContent = "Please select a value bigger than 0"
    }
}