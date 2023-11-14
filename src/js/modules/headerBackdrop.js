export const headerBackdrop = () => {
    
    document.addEventListener('scroll', () => {
        if (scrollY === 0) {
            document.querySelector('.header').classList.remove('header_after-scroll');
        } else {
            document.querySelector('.header').classList.add('header_after-scroll');
        }
    })
}