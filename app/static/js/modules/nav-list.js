export function nav() {
    let navList = document.querySelector('.nav-list');

    if(navList) {
        navList.addEventListener('click', e => {
            const item = e.target.closest('[data-list-item]');
            
            if(item) {
                let nested = item.querySelector('[data-list]');
                nested.classList.toggle('active');
            }

        });
    }
}