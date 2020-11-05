import simpleParallax from "simple-parallax-js";

export class ParallaxAvatar {
	constructor() {
		this.effects()
	}
	effects() {
		const avatar = document.getElementById("imgavatar");
		this.efectos_func(avatar);
	}
	efectos_func(clase) {
		new simpleParallax(clase, {
			overflow: true,
			scale: 1.5,
			delay: 5,
			transition: 'cubic-bezier(0,0,0,2)',
			maxTransition: 1000
		});
	}
}
