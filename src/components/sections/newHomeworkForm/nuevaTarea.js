import { PendienteList } from "../toDoList/dbPendientes.js";

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
        buttonAgregar,
        buttonCancelar
    );

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            nombre: inputNombre.value,
            descripcion: inputDescripcion.value,
            prioridad: selectPrioridad.value
        };

        console.log(tarea);
        PendienteList.push(tarea);

        form.reset();
    });

    return form;
};

export { FormTarea };
