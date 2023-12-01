export const modal = () => {
    const callBtn = document.querySelectorAll('.plan__button');
    const modal = document.querySelector('dialog.modal_01');
    const closeBtn = document.querySelector('.modal__close');
    const footer = document.querySelector('.footer');
    console.log(callBtn);

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

    closeBtn.addEventListener('click', (e) => {
        modal.close();
    })

    modal.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submited');
        let p = modal.querySelector('p');
        console.log(p);
        if (p) p.remove();
        document.body.classList.remove('scroll-lock');
        modal.close();
        footer.insertAdjacentElement('beforeend', modal);
    })

    callBtn.forEach(btn => btn.addEventListener('click', clickHandler));
}