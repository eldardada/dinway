function simpleSlider() {
    const simpleSlider = document.querySelector('.simple-slider');

    if(simpleSlider) {
        const slider = new Swiper('.simple-slider .swiper-container', {
            slidesPerView: 1.4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.simple-slider-slider__next',
                prevEl: '.simple-slider-slider__prev',
            },
            breakpoints: {
                460: {
                    slidesPerView: 1.8,
                },
                576: {
                    slidesPerView: 2,
                },
                968: {
                    slidesPerView: 3,
                },
            }
        });
    }
}