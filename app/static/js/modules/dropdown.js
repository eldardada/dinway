function dropdown() {
    document.addEventListener('click', e => {
        e.preventDefault()
        const target = e.target;
        const item = target.closest('[data-list-item]');
        let nested = null;

        if(item) {
            nested = item.querySelector('[data-list]');
        }
        if(nested) {
            nested.classList.toggle('active');
            const title = item.querySelector('[data-title]');
            const select = target.closest('[data-select]');

            if(title && select && e.target.closest('[data-select]')) {
                let tmp = title.innerHTML;
                title.innerHTML = '';
                title.innerHTML = select.innerHTML;
                select.innerHTML = tmp;
            }
        }
        else {
            document.querySelectorAll('[data-list]').forEach(el => {
                el.classList.remove('active');
            });
        }
    });
}

