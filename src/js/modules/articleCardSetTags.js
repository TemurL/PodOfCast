export const articleCardSetTags = () => {
    // const cardFooters = document.getElementsByClassName('article-card__footer, episode__footer');
    const cardFooters = document.querySelectorAll('.article-card__footer, .episode__footer')

    for (let i = 0; i < cardFooters.length; i++) {
        let tagsArr = cardFooters[i].getAttribute('tags').split(' ');

        tagsArr.forEach(tag => {
            if (tag.includes('_')) tag = tag.replace(/_/g, ' ');
            let span = document.createElement('span');
            span.textContent = tag;
            span.classList.add(`${cardFooters[i].classList[0].split('__')[0]}__tag`);
            cardFooters[i].insertAdjacentElement('afterbegin', span);
        })
    }
}