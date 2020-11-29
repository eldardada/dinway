import {currency} from './currency';
import {heroVideo} from './hero-video_main';

export function hero_main() {
    const heroMain = document.querySelector('.hero_main');

    if(heroMain) {
        const heroContent = heroMain.querySelector('.hero-content');

        heroMain.addEventListener('click', e => {
            const target = e.target;

            const btn = target.closest('#hero-video-btn');
            const close = target.closest('.hero-video__close');
            
            if(btn) {
                heroContent.insertAdjacentHTML('beforeend', heroVideo);
            }
            else if(close) {
                document.querySelector('.hero-video').remove();
            }
        })
        

    }

    currency();

    
}


export default hero_main;