const carouselHover = () => {
    const carousel = document.querySelectorAll('.carousel');
    const groups = []

    carousel.forEach(x => {
        groups.push(...x.querySelectorAll('.group'));
       
    })

    carousel.forEach(x => {
        x.addEventListener('mouseover', e => {
            groups.forEach(g => {
                g.style.animationPlayState = 'paused'
            })
            console.log('hello')
        })

        x.addEventListener('mouseleave', e => {
            groups.forEach(g => {
                g.style.animationPlayState = 'running'
            })
            console.log('bye')
        })
    })
}

carouselHover()
