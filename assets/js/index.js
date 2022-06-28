// Nav Bar For Mobile
const navContainer = document.querySelector('.nav__container')
const navList = document.querySelector('.nav__list')
const navToggle = document.querySelector('.mobile-nav-toggle')
const hamburger = document.querySelector('.hamburger')
const navLink = Array.from(document.querySelectorAll('.nav__link'))
const body = document.querySelector('body')


navToggle.addEventListener('click', () => {

    // Prevent scrolling when menu open
    body.classList.toggle('overflow-hidden')

    navContainer.classList.toggle('active')

    // Aria label. Tell sr if menu is open
    const visibility = navList.getAttribute('data-visible')
    if (visibility === "false") {
        navList.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        navList.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.toggle('active')
        body.classList.toggle('overflow-hidden')
    })
})

document.body.addEventListener('click', (e) => {
    if (e.target !== navList && e.target !== navToggle && e.target !== hamburger) {
        navContainer.classList.remove('active')
        body.classList.remove('overflow-hidden')
    }
})



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