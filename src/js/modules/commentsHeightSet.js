export const commentsHeightSet = () => {
    setTimeout(() => {
        let commentHeightArr = Array.from(document.getElementsByClassName('comments__card')).map(comment => comment.offsetHeight);
        let maxHeight = `${Math.max.apply(null, commentHeightArr)}px`;
        Array.from(document.getElementsByClassName('comments__card')).forEach(card => {
            if (window.innerWidth > 768) return
            card.style.height = maxHeight
        });
        document.getElementsByClassName('comments__cards')[0].style.height = maxHeight;
    },100)
}