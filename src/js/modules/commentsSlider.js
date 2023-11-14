export const commentsSlider = () => {
    const commentsColl = document.getElementsByClassName('comment');
    const container = commentsColl[0].parentElement;
    const controls = document.querySelectorAll('.comments__controls > *');

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
            if (btn.classList.contains('comments__control-prev')) return prev.click();
            next.click();
        })
    });
}