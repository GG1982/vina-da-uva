const navToggleButton = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__list')


navToggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})