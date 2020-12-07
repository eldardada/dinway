import {questionsItems} from './qustions-items';
import {questionOnClick, createQuestion, getQuestions} from './../questions';

export const faqQuestions = () => {

    let toSlides = items => {
        return items.map(item => `<div class="swiper-slide">${item}</div>`);
    }
    let category = 'blogTime';

    let slides = toSlides(getQuestions(questionsItems[category]));

    console.log(slides);
    const faqQuestions = document.querySelector('.faq-questions');
    
    if(faqQuestions) {
        
        const wrapper = document.querySelector('.questions');

        questionOnClick(wrapper);
    }
};