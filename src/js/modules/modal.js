export const modal = () => {
    const callBtn = document.querySelectorAll('.plan__button');
    const modal = document.querySelector('dialog.modal_01');
    const closeBtn = document.querySelector('.modal__close');
    const footer = document.querySelector('.footer');

    const clickHandler = (e) => {
        document.body.classList.add('scroll-lock');
        let planType = e.target.parentElement.parentElement.firstElementChild.textContent.split(' ')[0]
        let parag = document.createElement('p');
        parag.classList.add('parag');
        parag.classList.add('modal__parag');
        parag.style.fontWeight = '500';
        parag.textContent = `You've just selected our "${planType}" plan. Please, enter your Email to get more information.`
        closeBtn.insertAdjacentElement('afterend', parag);
        modal.showModal();
        return parag
    }

    const deleteParag = () => {
        let p = modal.querySelector('p');
        if (p) p.remove();
    }

    closeBtn.addEventListener('click', (e) => {
        deleteParag();
        modal.children[0].addEventListener('submit', () => {
            return false;
        })
        modal.close();
        document.body.classList.remove('scroll-lock');
    })

    modal.children[0].addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submited');
        deleteParag();
        let email = modal.children[0].elements[1].value;
        alert(`Done. You've subscribed via Email: ${email} !`);
        document.body.classList.remove('scroll-lock');
        modal.close();
        footer.insertAdjacentElement('beforeend', modal);
    })

    callBtn.forEach(btn => btn.addEventListener('click', clickHandler));
}