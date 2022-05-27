const faqToggle = Array.from(document.querySelectorAll('.js-faq-title-toggle'))


faqToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle("faq-active")
        btn.lastElementChild.classList.toggle("faq-active")
    })
});
