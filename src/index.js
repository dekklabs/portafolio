// @ts-ignore
require("./js/app")

/* JS Custom */
import { Home } from "./js/app";
import { Modal } from "./js/modal"
import { PortadaAnimation } from './js/PortadaAnimation';
import { Header } from "./js/header";
import { ProgressBar } from "./js/progressbar";
//import { ParallaxAvatar  } from "./js/avatarparallax";

document.addEventListener("DOMContentLoaded", () => {
    let home    = new Home();
    let modal   = new Modal();
    let portada = new PortadaAnimation();
    let header  = new Header();
	let progress = new ProgressBar();
	//let avatarParallax = new ParallaxAvatar();
})

import "./vendor";

console.log("testing");
