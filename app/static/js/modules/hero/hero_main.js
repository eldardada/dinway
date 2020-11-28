import {addVideoFunctionality} from '../../functions.js';
import {currency} from './currency';

export function hero_main() {
    const heroMain = document.querySelector('.hero_main');

    if(heroMain) {
        addVideoFunctionality(heroMain);
    }

    currency();

    
}


export default hero_main;