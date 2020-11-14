import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export const faq = () => {
    
    const faq = document.querySelector('.faq');
    
    if(faq) {
        const questions = faq.querySelector('.questions');

        questions.addEventListener('click', e => {
            
            const question = e.target.closest('.question');

            if(question) {
                const questionItem = question.closest('.questions__item');
                const answer = questionItem.querySelector('.answer');
                const height = answer.querySelector('.answer__container').offsetHeight + 'px';

                if(questionItem.classList.contains('active')) {
                    answer.style.height = 0;
                    questionItem.classList.remove('active');
                }
                else {
                    answer.style.height = height;
                    questionItem.classList.add('active');
                }
            }
        })
    }
};

export default faq;
