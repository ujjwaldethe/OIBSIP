document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        setTimeout(function () {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        }, 1000);
    });
});
