import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

export const faq = () => {
    
    const faq = document.querySelector('.faq');
    
    if(faq) {
        const wrapper = document.querySelector('.questions');
        const questionsBlock = document.querySelector('.questions');
        let items = questionsBlock.querySelectorAll('.questions__item');
        const btnMore = faq.querySelector('[data-more]');
        const btnClose = faq.querySelector('[data-close]');
        let counter = 0;
        let startItemsCount = 0;

        const questionsItems = {
            1: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            2: {
                question: 'Какую сумму оптимально вкладывать?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            3: {
                question: 'Могут ли поменяться условия для партнеров?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            4: {
                question: 'Какой срок выхода в безубыток?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            5: {
                question: 'Будет ли снижаться процент доходности?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            6: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            7: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            8: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            9: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            10: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            11: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            12: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            13: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            },
            14: {
                question: 'Какие гарантии долгосрочной работы компании?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptates impedit sit, veniam at itaque, officiis quas commodi blanditiis esse, recusandae eligendi velit excepturi obcaecati ipsum doloribus soluta! Soluta, aut!'
            }
        }

        function createQuestion(questionText, answerText) {
            const qItem = document.createElement('div');
            qItem.className = 'questions__item';
            qItem.innerHTML = `
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
            return qItem;
        }

        function removeQuestions() {
            items = questionsBlock.querySelectorAll('.questions__item');
            items.forEach(item => item.remove());
        }

        function getQuestions() {
            let questions = [];

            for(let item in questionsItems) {
                const question = createQuestion(questionsItems[item].question, questionsItems[item].answer);
                questions.push(question);
            }

            return questions;
        }

        function generateQuestions() {
            removeQuestions();

            const questions = getQuestions();
            counter = 0;

            if(window.innerWidth <= 576) {
                for(let i = 0; i < 3 && i < questions.length; i++) {
                    questionsBlock.append(questions[i]);
                    counter++;
                }
            }
            else {
                for(let i = 0; i < 5 && i < questions.length; i++) {
                    questionsBlock.append(questions[i]);
                    counter++;
                }
            }
            startItemsCount = counter;
            btnClose.style.display = 'none';
            btnMore.style.display = 'block';
        }

        function showMore() {
            const questions = getQuestions();
            const end = counter + 3;

            const startHeight = questionsBlock.offsetHeight;
            wrapper.style.height = startHeight + 'px';
            wrapper.style.overflow = 'hidden';

            for(let i = counter; i < end && i < questions.length; i++) {
                questionsBlock.append(questions[i]);
                counter++;
            }

            const endHeight = questionsBlock.scrollHeight;

            let add = 0;

            let timer = setInterval(() => {
                add += 5;
                
                wrapper.style.height = startHeight + add + 'px';

                if(wrapper.offsetHeight >= endHeight) {
                    clearInterval(timer);
                    wrapper.style.height = 'initial';

                    if(counter > startItemsCount) {
                        btnClose.style.display = 'block';
                    }
        
                    if(counter == Object.keys(questionsItems).length) {
                        btnMore.style.display = 'none';
                    }
                }
            }, 15);

        }

        questionsBlock.addEventListener('click', e => {
            
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

        generateQuestions();

        if(btnMore) {
            btnMore.addEventListener('click', showMore);
        }
        if(btnClose) {
            btnClose.addEventListener('click', generateQuestions);
        }
        
        window.addEventListener('resize', generateQuestions);
    }
};

export default faq;
