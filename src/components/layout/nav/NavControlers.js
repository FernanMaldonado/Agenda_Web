import { Favoritos } from "../../sections/ContactosFavoritos/ContactoFavorito.js";
import { Contactos } from "../../sections/contactos/Contactos.js";
import { registro } from "../../sections/newContactosForm/NuevoContacto.js";
import { FormTarea } from "../../sections/newHomeworkForm/nuevaTarea.js";
import { Pendientes } from "../../sections/toDoList/toDoList.js";

let container = document.getElementById("container");
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(registro());
}

let viewToDoList = function (){
    container.innerHTML = "";
    container.appendChild(Pendientes());
}

let viewNewHomework = function (){
    container.innerHTML = "";
    container.appendChild(FormTarea());
}

let viewContactsFavorites = function (){
    container.innerHTML = "";
    container.appendChild(Favoritos());
}

export { viewContacts, viewNewContacts, viewToDoList,viewNewHomework,viewContactsFavorites};