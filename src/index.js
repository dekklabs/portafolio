// @ts-ignore
require("./js/app")

import "./scss/main.scss"
import './scss/fonts.scss'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Home } from "./js/app";
import { Modal } from "./js/modal"
import { PortadaAnimation } from './js/PortadaAnimation';
import { Header } from "./js/header";

document.addEventListener("DOMContentLoaded", () => {
    let home    = new Home();
    let modal   = new Modal();
    let portada = new PortadaAnimation();
    let header  = new Header();
})