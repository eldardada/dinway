import Swiper from 'swiper';
import Loop from 'swiper';
Swiper.use([Loop])


window.addEventListener('load', function() {
    const menu = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const page = document.querySelector('html');
    
    
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

    const whySwiperContainer = document.querySelector('.why__slider .swiper-container');
    
    let whySlider = new Swiper(whySwiperContainer, whySliderSettings);


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


    menu.addEventListener('click', () => {
        
        menu.classList.toggle('active');
        header.classList.toggle('active');

        if(header.classList.contains('active')) {
            body.style.overflow = 'hidden';
            page.style.overflow = 'hidden';
        }
        else {
            body.style.overflow = '';
            page.style.overflow = '';
        }
    });


    window.addEventListener('resize', function() {
        whySlider.destroy();
        whySlider = new Swiper(whySwiperContainer, whySliderSettings);
        console.log(1);
    })
});