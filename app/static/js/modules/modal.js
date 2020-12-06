

export function modal() {
  const selectSingle = document.querySelector('.modal-select');
  if(selectSingle) {
    const selectSingle_title = selectSingle.querySelector('.modal-select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.modal-select__label');
    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
      } else {
        selectSingle.setAttribute('data-state', 'active');
      }
    }); 

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
      });
    }
  }

  const nextContentBtn = document.querySelector('[data-click="modal-audit-next"]');

  if(nextContentBtn) {
    nextContentBtn.addEventListener('click', () => {
      let modal = document.querySelector('.modal');
      let contentElems = modal.querySelectorAll('.modal__content');
      let num = 0;
      contentElems.forEach((el, index) => {
        if (el.hasAttribute('data-current')) {
          num = index + 1;
          el.removeAttribute('data-current');
        }
      });
      
      if(num >= contentElems.length - 1) {
        let btnSubmit = modal.querySelector('.modal__submit');
        btnSubmit.style.display = 'block';
        nextContentBtn.style.display = 'none';
      }

      if(contentElems[num]) {
        contentElems[num].setAttribute('data-current', '');
      }
      let count = modal.querySelector('[data-count]');
      if(count) {
        count.innerHTML = num + 1;
      }
    });
  }



}


