export const articleCardSetTags = () => {
    const cardFooters = document.getElementsByClassName('article-card__footer');

    for (let i = 0; i < cardFooters.length; i++) {
        let tagsArr = cardFooters[i].getAttribute('tags').split(' ');

        tagsArr.forEach(tag => {
            if (tag.includes('-')) tag = tag.replace(/-/g, ' ');
            let span = document.createElement('span');
            span.textContent = tag;
            span.classList.add('article-card__tag');
            cardFooters[i].insertAdjacentElement('afterbegin', span);
        })
    }
}