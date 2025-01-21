document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.style.position = 'sticky'
    } else {
        header.classList.remove('scrolled');
        header.style.position = 'absolute'
    }
});