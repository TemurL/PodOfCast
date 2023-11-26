export const commentsHeightSet = () => {
    setTimeout(() => {
        let elemClass;
        let commentHeightArr;

        document.title === 'Main' ? elemClass = 'comments__card' : elemClass = 'our-sponsors__card';
        
        commentHeightArr = Array.from(document.getElementsByClassName(elemClass)).map(comment => comment.offsetHeight);
        let maxHeight = `${Math.max.apply(null, commentHeightArr)}px`;
        Array.from(document.getElementsByClassName('comments__card')).forEach(card => {
            if (window.innerWidth > 768) return
            card.style.height = maxHeight
        });

        document.title === 'Main' ? document.getElementsByClassName('comments__cards')[0].style.height = maxHeight : document.getElementsByClassName('our-sponsors__cards')[0].style.height = maxHeight;
    },100)
}