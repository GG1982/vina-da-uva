const faqToggle = Array.from(document.querySelectorAll('.js-faq-title-toggle'))


faqToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        // toggle faq-answers (open/close)
        btn.nextElementSibling.classList.toggle("faq-active")

        // toggle +/- button
        btn.lastElementChild.classList.toggle("faq-active")
    })
});
