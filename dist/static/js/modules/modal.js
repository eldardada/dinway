function modal() {
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
    let modal = document.querySelector('.modal');
    
    nextContentBtn.addEventListener('click', () => {
      
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

    modal.addEventListener('submit', e => {
      e.preventDefault();
      modal.querySelector('.modal__title').innerHTML = 'Ваш результат';

      // получение данных с бека
      let title = 'Название продукта';
      let text = 'Текст рыба о продукте  Оптимальной суммой является сумма, комфортная для инвестора. Инвестору необходимо с помощью образовательной платформы и конференций с руководством принять решение, какую сумму он может вложить, чтоб быть спокойным. Основная задача инвестора — разобраться в проекте.';
      let content = `
      <div class="modal__container modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal__close" aria-label="Закрыть модальное окно" data-micromodal-close>X</button>
        <div class="modal__header modal__header">
            <h3 class="modal__title" id="modal-title">
            ${title}
            </h3>
        </div>
        <div class="modal__content" data-current>
          <p class="modal-poll__text">${text}</p>
        </div>
        <div class="modal__footer">
          <button type="button" class="modal__btn btn-blue">Записаться на консультацию</button>
        </div>
      </div>`;
      modal.querySelector('.modal__overlay').innerHTML = content;
    });

  }



}


