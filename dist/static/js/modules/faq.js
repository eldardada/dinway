function faq() {
    
    const faq = document.querySelector('.faq');
    
    if(faq) {
        
        const wrapper = document.querySelector('.questions');

        let questionsSettings = {
            wrapper: wrapper,
            questionsItems: questionsItems.popular,
            countOnPhone: 7,
            countOnDesktop: 7
        }

        generateQuestions(questionsSettings);
        
        window.addEventListener('resize', generateQuestions(questionsSettings));
        
        questionOnClick(wrapper);
    }
};