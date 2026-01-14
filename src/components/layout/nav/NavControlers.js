import { Contactos } from "../sections/contactos/Contactos.js";
import { registro } from "../sections/newContactosForm/NuevoContacto.js";
let container = document.getElementById("container");
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(registro());
}

export { viewContacts, viewNewContacts};