import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export function bizes() {
    
    const bizes = document.querySelector('.bizes');
    if(bizes) {
        
        const container = bizes.querySelector('.bizes-slider .swiper-container');
    
        const settings = {
            slidesPerView: 'auto',
            direction: 'vertical',
            spaceBetween: 20,
            allowTouchMove: false,
            loop: true,
            breakpoints: {
                576: {
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
            }
        };

        let slider = new Swiper(container, settings);
    }
};

export default bizes;
