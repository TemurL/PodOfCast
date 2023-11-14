export const mobMenu = () => {
    const menuBtn = document.querySelector('.nav-full__mob-menu-button');
    const closeBtn = document.querySelector('.nav-mob__close-button')
    const menuUl = document.querySelector('.nav-mob__ul');
    
    const menuBtnModif = 'nav-full__mob-menu-button_active';
    const menuUlModif = 'nav-mob__ul_active';
    const scrollLock = 'scroll-lock';

    closeBtn.classList.add(menuBtnModif);

    const handleClick = () => {
        menuUl.classList.toggle(menuUlModif);
        document.body.classList.toggle(scrollLock);
    }

    menuBtn.addEventListener('click', handleClick)
    closeBtn.addEventListener('click', handleClick)
}

