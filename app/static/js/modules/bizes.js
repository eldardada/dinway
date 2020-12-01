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
                    slidesPerView: 1.65,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                626: {
                    slidesPerView: 1.8,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                676: {
                    slidesPerView: 1.95,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                726: {
                    slidesPerView: 2.1,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                776: {
                    slidesPerView: 2.25,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                826: {
                    slidesPerView: 2.4,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                876: {
                    slidesPerView: 2.55,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                926: {
                    slidesPerView: 2.7,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                976: {
                    slidesPerView: 2.85,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1026: {
                    slidesPerView: 3,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1076: {
                    slidesPerView: 3.15,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1126: {
                    slidesPerView: 3.3,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1176: {
                    slidesPerView: 3.45,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1226: {
                    slidesPerView: 3.6,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1276: {
                    slidesPerView: 3.75,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1326: {
                    slidesPerView: 3.9,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1376: {
                    slidesPerView: 4.05,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1426: {
                    slidesPerView: 4.2,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1476: {
                    slidesPerView: 4.35,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1526: {
                    slidesPerView: 4.55,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1576: {
                    slidesPerView: 4.7,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1626: {
                    slidesPerView: 4.85,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1676: {
                    slidesPerView: 5,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1726: {
                    slidesPerView: 5.15,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1776: {
                    slidesPerView: 5.3,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1826: {
                    slidesPerView: 5.45,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1876: {
                    slidesPerView: 5.6,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                1920: {
                    slidesPerView: 5.72,
                    allowTouchMove: true,
                    direction: 'horizontal',
                },
                
                
                
                
                
                
                

            }
        };

        let slider = new Swiper(container, settings);
        
    }
};

export default bizes;
