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
            arrows: false,
            navigation: {
                prevEl: '.bizes-slider__slider-prev',
                nextEl: '.bizes-slider__slider-next'
            },
            breakpoints: {
                720: {
                    slidesPerView: 2,
                    direction: 'horizontal',
                    allowTouchMove: true,
                },
                1440: {
                    slidesPerView: 4,
                    direction: 'horizontal',
                    allowTouchMove: true,
                },
                1100: {
                    slidesPerView: 3,
                    direction: 'horizontal',
                    allowTouchMove: true,
                }             
            }
        };

        let slider = new Swiper(container, settings);
        
    }
};

export default bizes;
