import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export function bizes() {
    
    const bizes = document.querySelector('.bizes');
    if(bizes) {
        
        const container = bizes.querySelector('.bizes-slider .swiper-container');
    
        const settings = {
            slidesPerView: 1.4,
            spaceBetween: 20,
            breakpoints: {
                420: {
                    slidesPerView: 1.8,
                },
                900: {
                    slidesPerView: 3.2,
                }
            }
        };

        let slider = new Swiper(container, settings);
    }
};

export default bizes;
