import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewContactsFavorites, viewNewContacts, viewNewHomework, viewToDoList } from "./components/layout/nav/NavControlers.js";

let nav = document.getElementById("nav");
let container = document.getElementById("container");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "book.svg",
    viewContacts
));

nav.appendChild(Button(
    "Nuevo Contacto",
    "plus",
    "plus.svg",
    viewNewContacts
));

nav.appendChild(Button(
    "Contactos Favoritos",
    "favorite",
    "favoriteContacts.svg",
    viewContactsFavorites));

nav.appendChild(Button(
    "ToDoList",
    "todoList",
    "todolist.svg",
    viewToDoList));

nav.appendChild(Button(
    "Crear Tarea",
    "plus",
    "plus.svg",
    viewNewHomework));


// Vista inicial
viewContacts();

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
    } catch (error) {
        console.log(error);
    }
}

tareas();

console.log("Completado");