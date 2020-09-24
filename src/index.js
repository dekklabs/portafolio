// @ts-ignore
require("./js/app")

import "./scss/main.scss"
import './scss/fonts.scss'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Home } from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
    let home = new Home()
})