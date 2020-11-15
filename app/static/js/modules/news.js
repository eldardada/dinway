import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);


export const news = () => {

    const news = document.querySelector('.news');

    if(news) {
        const newsSlider = new Swiper('.news-slider .swiper-container', {
            slidesPerView: 1.3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.news-slider__next',
                prevEl: '.news-slider__prev',

            },
            breakpoints: {
                470: {
                    slidesPerView: 1.7,
                },
                576: {
                    slidesPerView: 2,
                },
                650: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

        }); 

    }
}

export default news;
