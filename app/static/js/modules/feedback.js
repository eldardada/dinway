import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export const feedback = () => {
    const feedback = document.querySelector('.feedback');

    if(feedback) {
        const feedbackSlider = new Swiper('.feedback-slider .swiper-container', {
            slidesPerView: 1.3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.feedback-slider__next',
                prevEl: '.feedback-slider__prev',
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



export default feedback;