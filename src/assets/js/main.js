import { menu } from "./menu.js";
import { pavo } from "./pavo.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    pavo();
});