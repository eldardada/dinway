function news() {

    const news = document.querySelector('.news');

    if(news) {
        const newsSlider = new Swiper('.news-slider .swiper-container', {
            slidesPerView: 1.3,
            spaceBetween: 43,
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
                800: {
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
