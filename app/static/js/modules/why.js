import Swiper from 'swiper/bundle';


export const why = () => {

    const why = document.querySelector('.why');

    if(why) {

        const whySliderSettings = {
            slidesPerView: 1.2,
            loop: true,
            slidesPerColumnFill: 'row',
            spaceBetween: 24,
            breakpoints: {
                400: {
                    slidesPerView: 1.5,
                },
                576: {
                    loop: false,
                    spaceBetween: 40,
                    allowTouchMove: false,
                    slidesPerColumn: 2,
                    slidesPerView: 2
                },
                900: {
                    slidesPerView: 4,
                    slidesPerColumnFill: 'column',
                    slidesPerColumn: 1,
                },
            }
        }
        
        const whySwiperContainer = why.querySelector('.why-slider .swiper-container');
        
        let whySlider = new Swiper(whySwiperContainer, whySliderSettings);
        
        window.addEventListener('resize', function() {
            whySlider.destroy();
            whySlider = new Swiper(whySwiperContainer, whySliderSettings);
        });
    }
}

export default why;

