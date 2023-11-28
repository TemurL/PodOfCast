import { commentsHeightSet } from "./commentsHeightSet.js";

export const commentsSlider = () => {
    if (document.title != 'Main' && document.title != 'About') return console.log('no sliders');
    const commentsColl = document.getElementsByClassName('card');
    const container = commentsColl[0].parentElement;
    const controls = document.querySelectorAll('.comments__controls > *, .our-sponsors__controls > *');

    const replaceLastClass = (elem, str) => {
        let lastClass = elem.classList.toString().split(' ')[2];
        if (!lastClass) return elem.classList.add(str);
        elem.classList.replace(lastClass, str);
    }

    const resetLastClass = () => {
        Array.from(commentsColl).forEach(card => {
            let lastClass = card.classList.toString().split(' ')[2];
            if (lastClass) card.classList.remove(card.classList[2]);
        })
    }

    for (let i = 0; i < commentsColl.length; i++) {
        commentsColl[i].addEventListener('click', e => {
            let index = Array.from(container.children).indexOf(e.currentTarget);
            resetLastClass();
            replaceLastClass(commentsColl[index], 'active-card');
            if (!commentsColl[index - 1]) {
                replaceLastClass(container.lastElementChild, 'prev-card');
            } else {
                replaceLastClass(commentsColl[index - 1], 'prev-card');
            }
            if (!commentsColl[index + 1]) {
                replaceLastClass(commentsColl[0], 'next-card');
            } else {
                replaceLastClass(commentsColl[index + 1], 'next-card');
            }
        })
    }

    controls.forEach(btn => {
        btn.addEventListener('click', () => {
            let prev = document.querySelector('.prev-card');
            let next = document.querySelector('.next-card');
            if (btn.classList.contains('comments__control-prev') || btn.classList.contains('our-sponsors__control-prev')) return prev.click();
            next.click();
        })
    });


    container.addEventListener('touchstart', handleTouchStart, false);
    container.addEventListener('touchmove', handleTouchMove, false);
    let xDown = null;
    let yDown = null;
        
    function getTouches(evt) {
        return evt.touches
    }
    
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };
        
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) return
            
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
            
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
            
        if ( Math.abs(xDiff) > Math.abs(yDiff) ) {/* отлавливаем разницу в движении */
            if ( xDiff > 0 ) {
                document.querySelector('.next-card').click();
            } else {
                document.querySelector('.prev-card').click();
            }
        } else {
            if ( yDiff > 0 ) {
            /* swipe вверх */
            } else {
            /* swipe вниз */
            }
        }
        /* свайп был, обнуляем координаты */
        xDown = null;
        yDown = null;
    };

    commentsHeightSet();
}