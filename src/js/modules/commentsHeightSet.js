export const commentsHeightSet = () => {
    setTimeout(() => {
        let commentHeightArr;
        if (document.title === 'Main') {
            commentHeightArr = Array.from(document.getElementsByClassName('comments__card')).map(comment => comment.offsetHeight);
        }
        if (document.title === 'About') {
            commentHeightArr = Array.from(document.getElementsByClassName('our-sponsors__card')).map(comment => comment.offsetHeight);
        }
        let maxHeight = `${Math.max.apply(null, commentHeightArr)}px`;
        Array.from(document.getElementsByClassName('comments__card')).forEach(card => {
            if (window.innerWidth > 768) return
            card.style.height = maxHeight
        });
        if (document.title === 'Main') {
            document.getElementsByClassName('comments__cards')[0].style.height = maxHeight;
        } else {
            document.getElementsByClassName('our-sponsors__cards')[0].style.height = maxHeight;
        }
    },100)
}