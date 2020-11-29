import {Swiper, Navigation, Autoplay} from 'swiper';
Swiper.use([Navigation, Autoplay]);

// modules
import {bizes} from './modules/bizes.js';
import menu from './modules/menu.js';
import feedback from './modules/feedback.js';
import why from './modules/why.js';
import team from './modules/team.js';
import faq from './modules/faq.js';
import news from './modules/news.js';
import {video} from './modules/video.js';
import hero_main from './modules/hero/hero_main.js';
import {nav} from './modules/nav-list';

window.addEventListener('load', function() {
    menu();
    nav();
    bizes();
    why();
    feedback();
    team();
    faq();
    news();
    hero_main();
    video();

});