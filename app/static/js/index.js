import Swiper from 'swiper';

import toggleActiveCLass from './functions.js';

// modules
import bizes from './modules/bizes.js';
import menu from './modules/menu.js';
import feedback from './modules/feedback.js';
import why from './modules/why.js';

window.addEventListener('load', function() {

    bizes();
    menu();
    why();
    feedback();

});