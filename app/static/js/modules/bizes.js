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
                    slidesPerView: 1.42,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                676: {
                    slidesPerView: 1.72,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                776: {
                    slidesPerView: 2.02,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                876: {
                    slidesPerView: 2.32,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                976: {
                    slidesPerView: 2.62,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1076: {
                    slidesPerView: 2.92,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1176: {
                    slidesPerView: 3.22,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1276: {
                    slidesPerView: 3.52,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1376: {
                    slidesPerView: 3.82,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1476: {
                    slidesPerView: 4.12,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1576: {
                    slidesPerView: 4.32,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1676: {
                    slidesPerView: 4.62,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1776: {
                    slidesPerView: 4.92,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1876: {
                    slidesPerView: 5,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
            }
        };

        let slider = new Swiper(container, settings);
        
    }
};

export default bizes;
