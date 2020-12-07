export function createQuestion(questionText, answerText) {
    return `
    <div class="questions__item">
        <div class="question">
            <p class="question__text">${questionText}</p>
            <svg class="question__arrow" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.90691 7.60752C7.12756 8.37888 5.87244 8.37888 5.0931 7.60753L0.863676 3.42149C-0.406267 2.16457 0.483796 0 2.27058 0H10.7294C12.5162 0 13.4063 2.16457 12.1363 3.42148L7.90691 7.60752Z" fill="#001032"/>
            </svg>
        </div>
        <div class="answer">
            <div class="answer__container">${answerText}</div>
        </div>
    </div>`;
}

export function removeQuestions(wrapper) {
    let items = wrapper.querySelectorAll('.questions__item');
    items.forEach(item => item.remove());
}

export function getQuestions(questionsItems) {
    let questions = [];

    for(let item in questionsItems) {
        const question = createQuestion(questionsItems[item].question, questionsItems[item].answer);
        questions.push(question);
    }

    return questions;
}

export function generateQuestions(settings) {
    let {
        wrapper, 
        questionsItems, 
        phoneWidth = 576, 
        countOnPhone = 7, 
        countOnDesktop = 7
    } = settings;
    
    removeQuestions(wrapper);

    const questions = getQuestions(questionsItems);
    
    if(window.innerWidth <= phoneWidth) {
        for(let i = 0; i < countOnPhone && i < questions.length; i++) {
            wrapper.insertAdjacentHTML('beforeend', questions[i]);
        }
    }
    else {
        for(let i = 0; i < countOnDesktop && i < questions.length; i++) {
            wrapper.insertAdjacentHTML('beforeend', questions[i]);
        }
    }
}

export function questionOnClick(wrapper) {
    wrapper.addEventListener('click', e => {
            
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
    });
}

