function faqQuestions() {

    const faqQuestions = document.querySelector('.faq-questions');
    const menu = faqQuestions.querySelector('.faq-questions-list')
    const wrapper = faqQuestions.querySelector('.questions');
    const pagination = faqQuestions.querySelector('.questions-pagination');
    const qCount = 10;
    if(faqQuestions) {

        function getPaginationBullets(items, part) {
            let bulets = [];

            for (let i = 0, j = 1; i < items.length; i += part) {
                let span = `<span class="questions-pagination-bulet" data-start="${i}">${j++}</span>`;

                bulets.push(span);
            }

            bulets[0] = `<span class="questions-pagination-bulet active" data-start="0">1</span>`;

            return bulets;
        }

        function initPagination(items, category, part = 10) {
            let bullets = getPaginationBullets(items[category], part);
            faqQuestions.querySelector('.questions-pagination').innerHTML = bullets.join('');
            pagination.setAttribute('data-category', category);
        }

        function insertQuestions(wrapper, questionsArray, start, end) {
            let questions = getQuestions(questionsArray, start, end);
            wrapper.innerHTML = '';
            questions.forEach(question => wrapper.insertAdjacentHTML('beforeend', question));
        }

        function generateListForPhone() {
            let list = document.querySelector('.faq-questions-list');
            let choice = document.querySelector('.faq-questions-choice');
            let aside = document.querySelector('.faq-questions__aside');

            if(window.innerWidth < 768) {
                
                choice.style.display = 'block';
    
                choice.insertAdjacentElement('beforeend', list);
    
                choice.addEventListener('click', e => {
                    const target = e.target;
                    let name = choice.querySelector('[data-list-name]');
    
                    if(target.hasAttribute('data-question') || target.classList.contains('faq-questions-list__item') ) {
                        name.textContent = target.textContent;
                    }
    
                    choice.classList.toggle('active');
                });
            }
            else {
                choice.style.display = 'none';
                aside.insertAdjacentElement('beforeend', list);
            }
        }
        initPagination(questionsItems, 'popular')
        
        questionOnClick(wrapper);

        insertQuestions(wrapper, questionsItems['popular'], 0, qCount);

        generateListForPhone();

        window.addEventListener('resize', generateListForPhone);

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

                        item.classList.add('faq-questions-list__item--current');
                        insertQuestions(wrapper, questionsItems[category], 0, qCount);
                        initPagination(questionsItems, category, qCount)
                    }
                }
            }
        );
        
        pagination.addEventListener('click', e => {
            let index = parseInt(e.target.dataset.start);
            const target = e.target;
            
            let btn = target.hasAttribute('data-start') ? target :
                    target.querySelector('[data-start]');

            if(btn) {
                let start = parseInt(btn.dataset.start);
                let category = btn.closest('.questions-pagination').dataset.category;
                insertQuestions(wrapper, questionsItems[category], start, start + qCount)
                initPagination(questionsItems, category, qCount);
                let items = pagination.querySelectorAll('.questions-pagination-bulet');

                items.forEach(item => {
                    if(item.classList.contains('active') && item.dataset.start != index) {
                        item.classList.remove('active');
                    }
                    else if(item.dataset.start == index) {
                        item.classList.add('active');
                    }
                });

            }
        });

        

        
        

        

    }
};