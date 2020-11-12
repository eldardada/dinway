import Swiper from 'swiper';

export const feedback = () => {
    const feedback = document.querySelector('.feedback');

    if(feedback) {
        const feedbackSlider = new Swiper('.feedback-slider .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 40,
            breakpoints: {
                968: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2
                }
            }
        });
    }
}



export default feedback;