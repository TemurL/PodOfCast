export const commentsHeightSet = () => {
    setTimeout(() => {
        let commentHeightArr = Array.from(document.getElementsByClassName('comments__card')).map(comment => comment.offsetHeight);
        console.log(commentHeightArr);
        let maxHeight = `${Math.max.apply(null, commentHeightArr)}px`;
        console.log(maxHeight);
        document.getElementsByClassName('comments__cards')[0].style.height = maxHeight;
    },100)
}