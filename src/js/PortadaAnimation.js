import Typed from 'typed.js';

export class PortadaAnimation {
    constructor() {
        this.animacion()
    }
    animacion() {
        let options = {
            strings: ["I'm Jonathan J.R", "Frontend Developer"],
            smartBackspace: true,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        };
          
        let typed = new Typed('#typed', options);
    }
}