import {Swiper, Virtual, Pagination} from 'swiper';
Swiper.use([Virtual, Pagination]);
import {questionsItems} from './qustions-items';
import {questionOnClick, removeQuestions, getQuestions} from './../questions';

export const faqQuestions = () => {

    const faqQuestions = document.querySelector('.faq-questions');
    
    if(faqQuestions) {
        
        const wrapper = document.querySelector('.faq-questions__qna');

        questionOnClick(wrapper);

        const menu = document.querySelector('.faq-questions-list')

        let slider = new Swiper('.faq-questions__qna .swiper-container', {
            height: 50,
            slidesPerView: 6,
            direction: 'vertical',
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            virtual: {
                slides: (function () {
                    let questions = getQuestions(questionsItems['popular']);
                    let slides = [];
                  for (let i = 0; i < questions.length; i++) {
                    slides.push(questions[i]);
                  }
                  return slides;
                }()),
            }
        });

        menu.addEventListener('click', e => {
            const target = e.target;
            if(target != menu) {
                let btn = (target.hasAttribute('data-question') ? 
                        target : false) ||
                        target.querySelector('[data-question]');
                    if(btn) {
                        let category = btn.dataset.question;
                        let questions = getQuestions(questionsItems[category]);
                        slider.virtual.removeAllSlides();
                        questions.forEach(question => slider.virtual.appendSlide(question));
                    }
                }
            }
        );
        

        
    }
};