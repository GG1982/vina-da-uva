// const navToggleButton = document.querySelector('.nav__toggle')
// const navList = document.querySelector('.nav__list')


// navToggleButton.addEventListener('click', () => {
//     navList.classList.toggle('active')
// })
const navContainer = document.querySelector('.nav__container')
const nav = document.querySelector('.nav__list')
const navToggle = document.querySelector('.mobile-nav-toggle')

let menuOpen = false

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('active')

    const visibility = nav.getAttribute('data-visible')
    if (visibility === "false") {
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

// document.body.addEventListener('click', () => {
//     console.log(nav)
// })




// navToggle.addEventListener('click', () => {
//     const visibility = nav.getAttribute('data-visible')
//     if(visibility === "false") {
//         nav.setAttribute('data-visible', true)
//         navToggle.setAttribute('aria-expanded', true)
//     } else if (visibility === "true") {
//         nav.setAttribute('data-visible', false)
//         navToggle.setAttribute('aria-expanded', false)
//     }

// })