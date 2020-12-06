/* import {Swiper, Navigation, Autoplay} from 'swiper';
Swiper.use([Navigation, Autoplay]); */
import MicroModal from 'micromodal';

// modules
import {bizes} from './modules/bizes.js';
import menu from './modules/menu.js';
import {simpleSlider} from './modules/simple-slider.js';
// import why from './modules/why.js';
// import team from './modules/team.js';
import faq from './modules/faq.js';
import news from './modules/news.js';
import {video} from './modules/video.js';
import hero_main from './modules/hero/hero_main.js';
import {nav} from './modules/nav-list';
import {modal} from './modules/modal';

window.addEventListener('load', function() {
    // menu();
    // nav();
    // bizes();
    // why();
    // simpleSlider();
    // team();
    // faq();
    // news();
    // hero_main();
    // video();
    MicroModal.init();
    MicroModal.show('modal-poll');
    modal();
});