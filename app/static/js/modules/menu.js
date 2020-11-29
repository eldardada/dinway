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
    }
}

export default menu;
