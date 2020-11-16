import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export const bizes = () => {
    
    const bizes = document.querySelector('.bizes');
    
    if(bizes) {
        
        const container = bizes.querySelector('.bizes-slider .swiper-container');
    
        const settings = {
            slidesPerView: 1.4,
            spaceBetween: 20,
            breakpoints: {
                730: {
                    slidesPerView: 3,
                    allowTouchMove: false
                }
            }
        };

        let slider = new Swiper(container, settings);

        const remakeForMobile = () => {
            if(window.innerWidth <= 730 && slider.slides.length < 5) {
                const slides = bizes.querySelectorAll('.bizes [data-toggle-slide]');
                slider.appendSlide(slides);
            }
        }

        const remakeForDesktop = () => {
            if(window.innerWidth > 730 && slider.slides.length > 3) {
                let blocksWrapper = bizes.querySelector('.bizes .bizes-blocks');
                const slides = bizes.querySelectorAll('.bizes [data-toggle-slide]');

                slides.forEach(slide => {
                    slide.removeAttribute('style');
                    slide.className = 'swiper-slide';
                    blocksWrapper.prepend(slide);
                })
                
            }
        }

        window.addEventListener('resize', function() {
            remakeForMobile();
            remakeForDesktop();
        });

        remakeForMobile();
        remakeForDesktop();
    }
};

export default bizes;
