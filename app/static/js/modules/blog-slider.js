function blogSlider() {
    const blogSldier = document.querySelector('.blog-slider');

    const cards = {
      about: [
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 1,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 2,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 1',
          text: 'asfasfsafsafasfasfbaskjfbal sjfbjkasbfkasbfksafbkasfbk sjfbjkasbfkasbfksafbkasfbk sjfbjkasbfkasbfksafbkasfbk sjfbjkasbfkasbfksafbkasfbksjfbjkasbfkasbfksafbkasfbk sjfbjkasbfkasbfksafbkasfbk sjfbjkasbfkasbfksafbkasfbk  askfbaksfbksajb kasfbkas bfsabjf ksafbksa bksafb kasbfk sabfk sbakf basjkf baskfbk asbfk sbakfb sakfblsafbasfbl asfb alsfba;sfbsaasfa safs asfalsfba;sfbsaasfa safs asfalsfba;sfbsaasfa safs asf  safas fasf asf asfas fsa ;f b 1',
          views: 100,
          author: 'Jhohn',
          id: 3,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 2',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 4,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 3',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 5,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'About 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 6,
          category: 'about',
          time: '22:10',
          date: '22.12.2020'
        },
      ],
      news: [
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 1,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 2,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 3,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 2',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 4,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 3',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 5,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'news 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 6,
          category: 'news',
          time: '22:10',
          date: '22.12.2020'
        },
      ],
      feedback: [
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 1,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 2',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 2,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 3',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 3,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 2',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 4,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 3',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 5,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
        {
          img: 'static/img/blog-slider/img-sm.jpg',
          title: 'feedback 1',
          text: 'someText 1',
          views: 100,
          author: 'Jhohn',
          id: 6,
          category: 'feedback',
          time: '22:10',
          date: '22.12.2020'
        },
      ],
    }

    if(blogSldier) {
      const cardsContainer = document.querySelector('.blog-slider-thumbs__cards');
      const menu = document.querySelector('.blog-slider-menu');
      const sliderThumbsSettings = {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      }
      
      let sliderThumbs = new Swiper('.blog-slider .swiper-container', sliderThumbsSettings);

      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }

      function getSmallCards(category) {
        let newCards = [];

        if(category === 'all') {
          let categoryCards = Object.values(cards);
          
          for(let key in categoryCards) {
            newCards.push(...categoryCards[key]);
          }

          newCards = shuffle(newCards);
        }
        else {
          newCards = cards[category];
        }

        return newCards;
      }

      function createSmallCard(category, img, title, text, id) {
        if(text.length > 50) {
          text = text.slice(0, 50) + '...';
        }
        if(title.length > 20) {
          title = title.slice(0, 20) + '...';
        }

        return `
        <div class="blog-secondary-card" data-category="${category}" data-index="${id}">
          <div class="blog-secondary-card__image">
              <img src="${img.trim()}" alt="">
          </div>
          <div class="blog-secondary-card__right">
              <h4 class="blog-secondary-card__title">
                  ${title.trim()}
              </h4>
              <p class="blog-secondary-card__text">${text.trim()}</p>
          </div>
        </div>
        `;
      }

      function createMainCard(settings) {
        let {img, title, text, author, date, time, views} = settings;
        return (
          `<div class="blog-main-card">
            <div class="blog-main-card__image">
                <img src="${img}" alt="" >
            </div>
            <article class="blog-main-card-article">
                <img class="blog-main-card-article__decor" src="./static/img/blog-slider-branch.svg" alt="asfasfasf" >
                <div class="blog-main-card-article__header">
                    <div class="blog-main-card-article__header-left">
                        <div class="blog-main-card-article__info">
                            <time datetime="">
                                <span class="blog-main-card-article__time">${time}</span>
                                <span class="blog-main-card-article__date">${date}</span>
                            </time>
                            <span class="blog-main-card-article__author">${author}</span>
                        </div>
                    </div>
                    <div class="blog-main-card-article__header-right">
                        <span class="blog-main-card-article__views">${views}</span>
                        <svg width="20" height="18">
                            <use xlink:href="./static/img/svg/sprite.svg#view_icon"></use>
                        </svg>
                    </div>
                </div>
                <div class="blog-main-card-article__content">
                    <h3 class="blog-main-card-article__title">${title}</h3>
                    <div class="blog-main-card-article__text-wrap">
                      <p class="blog-main-card-article__text">${text}</p>
                    </div>
                </div>
            </article>
          </div>`
        );
      }

      function generateCards(category = 'all') {
        const cards = getSmallCards(category);
        const cardsHTML = cards.map(card => createSmallCard(card.category, card.img, card.title, card.text, card.id))
        cardsContainer.innerHTML = cardsHTML.join('');
      }

      function generateMainCard(settings) {
        const mainCard = createMainCard(settings);
        const mainCardContainer = document.querySelector('.blog-slider__maincard');
        mainCardContainer.innerHTML = mainCard;
      }

      
      function getCard(category, id) {
        let cards = getSmallCards(category);
        return cards.find(card => card.id == id);
      }

      const firstCardInfo = getCard('feedback', 1);

      const firstCardSettings = {
        views: firstCardInfo.views,
        img: firstCardInfo.img,
        title: firstCardInfo.title,
        text: firstCardInfo.text,
        author: firstCardInfo.author,
        date: firstCardInfo.date,
        time: firstCardInfo.time
      };

      generateMainCard(firstCardSettings);


      generateCards('all');
      sliderThumbs.destroy();
      sliderThumbs = new Swiper('.blog-slider .swiper-container', sliderThumbsSettings);


      menu.addEventListener('click', e => {
        const item = e.target.closest('[data-item]');
        
        if(item) {
          menu.querySelectorAll('[data-item]').forEach(el => {
            el.classList.remove('active');
          });

          item.classList.add('active');

          let category = item.dataset.category;
          generateCards(category);

          sliderThumbs.destroy();
          sliderThumbs = new Swiper('.blog-slider .swiper-container', sliderThumbsSettings);

          sliderThumbs.update();
          sliderThumbs.update();
          sliderThumbs.update();
        }
      });

      cardsContainer.addEventListener('click', e => {
        const card = e.target.closest('.blog-secondary-card');

        if(card) {
          const category = card.dataset.category;
          const index = card.dataset.index;
          const cardInfo = getCard(category, index);

          const settings = {
            views: cardInfo.views,
            img: cardInfo.img,
            title: cardInfo.title,
            text: cardInfo.text,
            author: cardInfo.author,
            date: cardInfo.date,
            time: cardInfo.time
          };

          generateMainCard(settings);
        }
      });
    }
}