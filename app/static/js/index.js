import Swiper from 'swiper';


window.addEventListener('load', function() {
    const menu = document.querySelector('.burger');
    const header = document.querySelector('.hero__header');
    const body = document.querySelector('body');
    
    const feedbackSlider = new Swiper('.feedback-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            968: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            }
            
        }
    })


    menu.addEventListener('click', () => {
        let icon = menu.querySelector('.burger-icon');

        icon.classList.toggle('active');
        header.classList.toggle('active');

        if(header.classList.contains('active')) {
            body.style.overflow = 'hidden';
        }
        else {
            body.style.overflow = '';
        }
    });
});