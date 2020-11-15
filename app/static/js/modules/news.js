import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);


export const news = () => {

    const news = document.querySelector('.news');

    if(news) {
        const newsSlider = new Swiper('.news-slider .swiper-container', {
            slidesPerView: 1.3,
            spaceBetween: 20,
            breakpoints: {
                375: {
                    slidesPerView: 1.8,
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
