import {addVideoFunctionality} from '../functions.js'

export function hero_main() {
    const heroMain = document.querySelector('.hero_main');

    if(heroMain) {
        addVideoFunctionality(heroMain);
    }
}


export default hero_main;