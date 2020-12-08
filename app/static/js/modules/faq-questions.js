import {Swiper, Virtual, Pagination} from 'swiper';
Swiper.use([Virtual, Pagination]);
import {questionsItems} from './qustions-items';
import {questionOnClick, getQuestions} from './../questions';

export const faqQuestions = () => {

    const faqQuestions = document.querySelector('.faq-questions');
    
    if(faqQuestions) {
        
        const wrapper = document.querySelector('.faq-questions__qna');

        questionOnClick(wrapper);

        function createSlideStructure(catagory) {
            let questions = getQuestions(questionsItems[catagory]);
            let slides = [];
            for (let i = 0; i < questions.length; i++) {
              slides.push(questions[i]);
            }
            return slides;
        }

        const menu = document.querySelector('.faq-questions-list')
        let sliderSelector = '.faq-questions__qna .swiper-container';
        let sliderSettings = {
            slidesPerView: 8,
            direction: 'vertical',
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
                dynamicBullets: true,
                
                renderCustom: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            virtual: {
                slides: (function() {
                   return createSlideStructure('popular');
                })()
            }
        }

        let slider = new Swiper(sliderSelector, sliderSettings);

        menu.addEventListener('click', e => {
            const target = e.target;
            if(target != menu) {
                let btn = (target.hasAttribute('data-question') ? 
                        target : false) ||
                        target.querySelector('[data-question]');
                    if(btn) {
                        let category = btn.dataset.question;
                        let item = btn.closest('.faq-questions-list__item');
                        menu.querySelectorAll('.faq-questions-list__item').forEach(item => {
                            if(item.classList.contains('faq-questions-list__item--current')) item.classList.remove('faq-questions-list__item--current');
                        });
                        item.classList.add('faq-questions-list__item--current')

                        sliderSettings.virtual.slides = (function() {
                            return createSlideStructure(category);
                        })();
                        slider.virtual.removeAllSlides();
                        slider.destroy();
                        slider = new Swiper(sliderSelector, sliderSettings)
                    }
                }
            }
        );
        

        
    }
};