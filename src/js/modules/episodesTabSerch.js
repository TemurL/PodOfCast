export const episodesTabSerch = () => {
    if (document.title != 'Episodes' && document.title != 'Articles') return console.log('no tabs');
    const tabs = document.querySelectorAll('.tab');
    const episodes = document.querySelectorAll('.search-item');
    const episodesList = document.getElementsByClassName('search-block')[0];

    const resetEpisodesList = (matchEpisodes) => {
        episodesList.innerHTML = '';
        if (matchEpisodes.length === 0) {
            let parag = document.createElement('p');
            parag.classList.add('parag');
            parag.classList.add('sorry');
            parag.textContent = 'Sorry, there are no items matching this tag';
            episodesList.appendChild(parag);
        } else {
            matchEpisodes.forEach(e => episodesList.appendChild(e));
        }
    }

    const getTags = (el) => {
        let footerChildrensArr = Array.from(el.lastElementChild.children);
        footerChildrensArr.pop();
        let tags = footerChildrensArr.map(span => span.textContent);
        return tags
    } 

    const switchActiveTab = (clicked) => {
        let active = document.querySelector('.tab_active');
        active.classList.remove('tab_active');
        clicked.classList.add('tab_active');
    }

    const clickHandler = (e) => {
        let neededTag = e.target.textContent.toLowerCase();
        let matchEpisodes = [];
        if (neededTag === 'all') {
            matchEpisodes = episodes;
        } else {
            episodes.forEach(episode => {
                if (getTags(episode).includes(neededTag)) {
                    matchEpisodes.push(episode)
                }
            })
        }
        resetEpisodesList(matchEpisodes);
        switchActiveTab(e.target);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', clickHandler);
    })
}