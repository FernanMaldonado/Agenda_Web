import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

let container = document.getElementById("container");

nav.appendChild(Button("Agenda", "agenda","book.svg"));
nav.appendChild(Button("Nuevo Contacto", "plus","plus.svg"));
nav.appendChild(Button("ToDoList","todoList","todolist.svg"));
nav.appendChild(Button("Crear Tarea","plus","plus.svg"));

container.appendChild(Contactos());