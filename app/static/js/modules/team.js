import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);


export const team = () => {
    const team = document.querySelector('.team');

    if(team) {
        const teamSlider = new Swiper('.team-slider .swiper-container', {
            slidesPerView: 1.75,
            spaceBetween: 20,
            breakpoints: {
                420: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 3,
                },
                825: {
                    slidesPerView: 4,
                },
                968: {
                    slidesPerView: 4,
                    allowTouchMove: false
                },
            }
        });
    }
}

export default team;