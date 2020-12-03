import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export const simpleSlider = () => {
    const simpleSlider = document.querySelector('.simple-slider');

    if(simpleSlider) {
        const slider = new Swiper('.simple-slider .swiper-container', {
            slidesPerView: 1.3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.simple-slider-slider__next',
                prevEl: '.simple-slider-slider__prev',
            },
            breakpoints: {
                968: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
            }
        });
    }
}