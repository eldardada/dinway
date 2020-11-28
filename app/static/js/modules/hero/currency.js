import {Swiper, Autoplay} from 'swiper';
Swiper.use([ Autoplay]);

export function currency() {
    let currencySlider = new Swiper('.currency-slider .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        speed: 3000,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            480: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 5,
            },
            960: {
                slidesPerView: 6,
            },
            1120: {
                slidesPerView: 7,
            },
            1280: {
                slidesPerView: 8,
            },
            1440: {
                slidesPerView: 9,
            },
        }
    });
}



