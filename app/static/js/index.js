/* import {Swiper, Navigation, Autoplay} from 'swiper';
Swiper.use([Navigation, Autoplay]); */
import MicroModal from 'micromodal';

// modules
import {bizes} from './modules/bizes.js';
import menu from './modules/menu.js';
import {simpleSlider} from './modules/simple-slider.js';
import faq from './modules/faq.js';
import news from './modules/news.js';
import {video} from './modules/video.js';
import hero_main from './modules/hero/hero_main.js';
import {modal} from './modules/modal';
import {dropdown} from './modules/dropdown';

window.addEventListener('load', function() {
    menu();
    dropdown();
    bizes();
    simpleSlider();
    faq();
    news();
    hero_main();
    video();
    MicroModal.init();
    modal();
});