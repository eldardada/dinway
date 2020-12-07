import {toggleActiveCLass} from '../functions.js';

export const menu = () => {

    const menu = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if(menu && header) {
        menu.addEventListener('click', () => {

            [menu, header, overlay].forEach(el => toggleActiveCLass(el));
    
            if(header.classList.contains('active')) {
                body.style.overflow = 'hidden';
            }
            else {
                body.style.overflow = '';
            }
        });

        let items = document.querySelectorAll('.nav-list__item');
        
        if(window.innerWidth <= 720) {
            items.forEach(item => {
                item.addEventListener('click', () => {
                    let listNested = item.querySelector('.list-nested');
                    let isActive = listNested.classList.contains('active');

                    if(!isActive) {
                        item.style.overflow = 'initial';
                        item.style.height = 'initial';
                    }
                    else {
                        item.style.overflow = 'hidden';
                        item.style.height = '16px';
                    }
                });
            });
        }
    }

    overlay.addEventListener('click', () => {
        [menu, header, overlay].forEach(el => toggleActiveCLass(el));
        body.style.overflow = '';
    });
}

export default menu;
