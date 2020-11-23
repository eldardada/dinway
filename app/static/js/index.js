import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

// modules
import bizes from './modules/bizes.js';
import menu from './modules/menu.js';
import feedback from './modules/feedback.js';
import why from './modules/why.js';
import team from './modules/team.js';
import faq from './modules/faq.js';
import news from './modules/news.js';
import video from './modules/video.js';
import hero_main from './modules/hero_main.js';

window.addEventListener('load', function() {
    video();
    menu();
    bizes();
    why();
    feedback();
    team();
    faq();
    news();
    hero_main();
});