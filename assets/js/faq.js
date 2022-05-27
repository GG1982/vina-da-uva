const faqToggle = Array.from(document.querySelectorAll('.js-faq-title-toggle'))


faqToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.nextElementSibling.classList.toggle("faq-active")
        btn.classList.toggle("faq-active")
    })
});
