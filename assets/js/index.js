// const navToggleButton = document.querySelector('.nav__toggle')
// const navList = document.querySelector('.nav__list')


// navToggleButton.addEventListener('click', () => {
//     navList.classList.toggle('active')
// })

const nav = document.querySelector('.nav__list')
const navToggle = document.querySelector('.mobile-nav-toggle')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('active');
})

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