function hero_main() {
    const heroMain = document.querySelector('.hero_main');

    if(heroMain) {
        const heroContent = heroMain.querySelector('.hero-content');

        heroMain.addEventListener('click', e => {
            const target = e.target;

            const btn = target.closest('#hero-video-btn');
            const close = target.closest('.hero-video__close');
            const body = target.closest('body');
            
            if(btn) {
                heroContent.insertAdjacentHTML('beforeend', heroVideo);
                body.style.overflow = 'hidden';
            }
            else if(close) {
                document.querySelector('.hero-video').remove();
                body.style.overflow = 'visible';

            }
        })
        

    }

    currency();

    
}