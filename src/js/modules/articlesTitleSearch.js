export const articlesTitleSearch = () => {
    if (document.title != 'Articles') return
    const articlesBlock = document.getElementsByClassName('article-and-news__cards')[0];
    const form = document.getElementById('search-article-form');
    const allTab = document.getElementsByClassName('tab')[0];
    const articleTitles = document.querySelectorAll('.article-card__title');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        allTab.click();
        let value = form.elements[0].value;
        let matchArticles = []
        articleTitles.forEach(title => {
            if (title.textContent.toLowerCase().includes(value)) matchArticles.push(title.parentElement);
        })
        if (matchArticles.length === 0) {
            articlesBlock.innerHTML = '';
            let parag = document.createElement('p');
            parag.classList.add('parag');
            parag.classList.add('sorry');
            parag.textContent = `Sorry, there are no articles, which content  "${value}"`;
            articlesBlock.appendChild(parag);
        } else {
            articlesBlock.innerHTML = '';
            matchArticles.forEach(e => articlesBlock.appendChild(e));
        }
    }

    form.addEventListener('submit', handleFormSubmit)
}