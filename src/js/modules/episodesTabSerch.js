export const episodesTabSerch = () => {
    if (document.title != 'Episodes') return console.log('no tabs');
    const tabs = document.querySelectorAll('.latest-episodes__tab');
    const episodes = document.querySelectorAll('.latest-episodes__episode');
    const episodesList = document.getElementsByClassName('episodes-block')[0];

    const resetEpisodesList = (matchEpisodes) => {
        episodesList.innerHTML = '';
        if (matchEpisodes.length === 0) {
            let parag = document.createElement('p');
            parag.classList.add('parag');
            parag.textContent = 'Sorry, there are no podcasts matching this tag';
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
        let active = document.querySelector('.latest-episodes__tab_active');
        active.classList.remove('latest-episodes__tab_active');
        clicked.classList.add('latest-episodes__tab_active');
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