import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export function bizes() {
    
    const bizes = document.querySelector('.bizes');
    if(bizes) {
        
        const container = bizes.querySelector('.bizes-slider .swiper-container');
    
        const settings = {
            slidesPerView: 'auto',
            spaceBetween: 20,
            direction: 'vertical',
            breakpoints: {
                900: {
                    direction: 'horizontal',
                    spaceBetween: 20,
                    slidesPerView: 3.2,
                }
            }
        };

        let slider = new Swiper(container, settings);
    }
};

export default bizes;
