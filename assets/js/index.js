// const navToggleButton = document.querySelector('.nav__toggle')
// const navList = document.querySelector('.nav__list')


// navToggleButton.addEventListener('click', () => {
//     navList.classList.toggle('active')
// })
const navContainer = document.querySelector('.nav__container')
const navList = document.querySelector('.nav__list')
const navToggle = document.querySelector('.mobile-nav-toggle')
const hamburger = document.querySelector('.hamburger')
const navLink = Array.from(document.querySelectorAll('.nav__link'))


navToggle.addEventListener('click', () => {
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
    })
})

document.body.addEventListener('click', (e) => {
    if (e.target !== navList && e.target !== navToggle && e.target !== hamburger) {
        navContainer.classList.remove('active')
    }
})

console.log(navList)
console.log(navToggle)
