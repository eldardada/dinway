export function dropdown() {
    document.addEventListener('click', e => {
        const item = e.target.closest('[data-list-item]');
        const nested = item ? item.querySelector('[data-list]') : false;
    
        if(nested) {
            nested.classList.toggle('active');
        }
        else {
            document.querySelectorAll('[data-list]').forEach(el => {
                el.classList.remove('active');
            });
        }
    });
}

