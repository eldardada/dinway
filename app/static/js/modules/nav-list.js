export function nav() {
    let navList = document.querySelector('.nav-list');

    if(navList) {
        navList.addEventListener('click', e => {
            const item = e.target.closest('[data-list-item]');
            
            if(item) {
                let nested = item.querySelector('[data-list]');
                nested.classList.toggle('active');
                /* nested.style.height = 'initial';
                let endHeight = nested.offsetHeight;
                let add = 0;

                let timer = setInterval(() => {
                    add += 5;
                    console.log('add :', add);
                    nested.style.height = add + 'px';
    
                    if(nested.offsetHeight >= endHeight) {
                        clearInterval(timer);
                    }
                }, 15); */

            }

        });
    }
}