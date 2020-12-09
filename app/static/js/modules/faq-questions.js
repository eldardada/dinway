import {Swiper, Virtual, Pagination} from 'swiper';
Swiper.use([Virtual, Pagination]);
import {questionsItems} from './qustions-items';
import {questionOnClick, getQuestions} from './../questions';

export const faqQuestions = () => {

    const faqQuestions = document.querySelector('.faq-questions');
    
    if(faqQuestions) {
        
        const menu = faqQuestions.querySelector('.faq-questions-list')
        const wrapper = faqQuestions.querySelector('.questions');
        const pagination = faqQuestions.querySelector('.questions-pagination');

        questionOnClick(wrapper);
        
        let sliderPagination = new Swiper('.questions-pagination .swiper-container', {
            slidesPerView: 3,
            
        });

        function initPagination(itemsLenght, category = 'popular', part = 5) {
            sliderPagination.removeAllSlides();

            for (let i = 0, j = 1; i < itemsLenght; i += part) {
                let slide = `
                <div class="swiper-slide">
                    <span class="questions-pagination-bulet" data-start="${i}">${j++}</span>
                </<div>`;
                pagination.setAttribute('data-category', category)
                sliderPagination.appendSlide(slide);
            }
        }

        function insertQuestions(wrapper, category = 'popular', start, end) {
            wrapper.innerHTML = '';
            let questions = getQuestions(questionsItems[category], start, end);
            questions.forEach(question => wrapper.insertAdjacentHTML('beforeend', question));
        }

        insertQuestions(wrapper, 'popular', 0, 5)

        initPagination(Object.keys(questionsItems['popular']).length, 'popular', 5)

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
                        insertQuestions(wrapper, category, 0, 5)
                        initPagination(Object.keys(questionsItems[category]).length, category, 5)
                    }
                }
            }
        );
        
        pagination.addEventListener('click', e => {
            e.preventDefault();
            let index = sliderPagination.clickedIndex;
            console.log('index :', index);

            const target = e.target;
            
            let btn = target.hasAttribute('data-start') ? target :
                    target.querySelector('[data-start]');

            if(btn) {
                let start = parseInt(btn.dataset.start);
                let category = btn.closest('.questions-pagination').dataset.category;

                insertQuestions(wrapper, category, start, start + 5);
                initPagination(Object.keys(questionsItems[category]).length, category, 5);
                sliderPagination.slideTo(index, 1000);
            }
        });
    }
};