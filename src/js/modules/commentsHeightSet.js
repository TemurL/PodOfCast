export const commentsHeightSet = () => {

    const resizeObserver = new ResizeObserver((entries, observer) => {
        entries.forEach(element => {
            let slideMaxHeight = Math.max(...Array.from(element.target.children).map(el => el.clientHeight));
            element.target.style.height = `${slideMaxHeight + 20}px`;
        })
    })

    const sliderMain = document.getElementsByClassName('comments__cards')[0];
    const sliderSpons = document.getElementsByClassName('our-sponsors__cards')[0]

    console.log('1')
    if (!sliderMain && !sliderSpons) return
    console.log('2')
    resizeObserver.observe(document.querySelector('.comments__cards, .our-sponsors__cards'));
}