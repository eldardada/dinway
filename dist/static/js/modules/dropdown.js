function dropdown() {
    document.addEventListener('click', e => {
        const item = e.target.closest('[data-list-item]');
        let nested = null;
        
        if(item) {
            nested = item ? item.querySelector('[data-list]') : false;
        }
        
        if(nested) {
            nested.classList.toggle('active');
            const title = item.querySelector('[data-title]');
            const select = nested.querySelector('[data-select]');
            if(title && select && e.target === select) {
                let tmp = title.textContent;
                title.textContent = select.textContent;
                select.textContent = tmp;
            }
        }
        else {
            document.querySelectorAll('[data-list]').forEach(el => {
                el.classList.remove('active');
            });
        }
    });
}

