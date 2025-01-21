document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbar.style.position = 'sticky'
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.position = 'absolute'
    }
});