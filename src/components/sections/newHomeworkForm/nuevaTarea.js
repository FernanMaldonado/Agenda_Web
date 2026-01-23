import {
    getHomeworkFromStorage,
    saveHomeworkToStorage
} from "../../../services/storageToDoList.js";
import { viewToDoList } from "../../layout/nav/NavControlers.js";

let FormTarea = function () {
    let form = document.createElement("form");
    form.classList.add("form-tarea");

    let h3 = document.createElement("h3");
    h3.textContent = "Nueva Tarea";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;

    let inputDescripcion = document.createElement("input");
    inputDescripcion.type = "text";
    inputDescripcion.placeholder = "Descripción";
    inputDescripcion.required = true;

    let selectPrioridad = document.createElement("select");
    selectPrioridad.required = true;

    let op1 = new Option("Importante", "Importante");
    let op2 = new Option("Leve", "Leve");
    let op3 = new Option("Puede esperar", "Puede esperar");

    selectPrioridad.append(op1, op2, op3);

    let inputFechaLimite = document.createElement("input");
    inputFechaLimite.type = "date";
    inputFechaLimite.required = true;

    let buttonAgregar = document.createElement("button");
    buttonAgregar.type = "submit";
    buttonAgregar.textContent = "Agregar Tarea";

    let buttonCancelar = document.createElement("button");
    buttonCancelar.type = "button";
    buttonCancelar.textContent = "Cancelar";
    buttonCancelar.style.background = "#ccc";
    buttonCancelar.style.color = "#333";

    form.append(
        h3,
        inputNombre,
        inputDescripcion,
        selectPrioridad,
        inputFechaLimite,
        buttonAgregar,
        buttonCancelar
    );

    let editIndex = localStorage.getItem("editIndex");
    let tareas = getHomeworkFromStorage();

    if (editIndex !== null) {
        let tarea = tareas[editIndex];

        h3.textContent = "Editar Tarea";
        buttonAgregar.textContent = "Guardar Cambios";

        inputNombre.value = tarea.nombre;
        inputDescripcion.value = tarea.descripcion;
        selectPrioridad.value = tarea.prioridad;
        inputFechaLimite.value = tarea.fechaLimite;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            nombre: inputNombre.value,
            descripcion: inputDescripcion.value,
            prioridad: selectPrioridad.value,
            fechaLimite: inputFechaLimite.value
        };

        let tareas = getHomeworkFromStorage();

        if (editIndex !== null) {
            tareas[editIndex] = tarea; // editar
            localStorage.removeItem("editIndex");
        } else {
            tareas.push(tarea); // creaer
        }

        saveHomeworkToStorage(tareas);
        location.reload();
    });

    buttonCancelar.addEventListener("click", () => {
        localStorage.removeItem("editIndex");
        viewToDoList();
    });

    return form;
};

export { FormTarea };
