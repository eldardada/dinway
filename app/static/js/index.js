import {Swiper, Navigation} from 'swiper';
Swiper.use([Navigation]);

import toggleActiveCLass from './functions.js';

// modules
import bizes from './modules/bizes.js';
import menu from './modules/menu.js';
import feedback from './modules/feedback.js';
import why from './modules/why.js';
import team from './modules/team.js';
import faq from './modules/faq.js';

window.addEventListener('load', function() {

    bizes();
    menu();
    why();
    feedback();
    team();
    faq();
});