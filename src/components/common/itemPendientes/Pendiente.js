import { deleteHomework } from "../../../services/storageToDoList.js";
import { viewNewHomework } from "../../layout/nav/NavControlers.js";

let ItemPendiente = (imgPendiente, nombre, descripcion, prioridad, fecha,index) => {
    let div = document.createElement("div");
    div.className = "item-pendiente";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgPendiente}`;

    let pNombre = document.createElement("p");
    pNombre.textContent = nombre;

    let pDescripcion = document.createElement("p");
    pDescripcion.textContent = descripcion;

    let fechaLimite = document.createElement("p");
    fechaLimite.textContent = fecha;

    let pPrioridad = document.createElement("p");
    pPrioridad.textContent = `Prioridad: ${prioridad}`;

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "deleteButton"

    let editButton = document.createElement("button");
    editButton.className = "editButton";

    deleteButton.addEventListener("click", () => {
        deleteHomework(nombre);
        location.reload();
    });

    editButton.addEventListener("click", () => {
        localStorage.setItem("editIndex", index);
        viewNewHomework();
    });



    div.appendChild(etiquetaImg);
    div.appendChild(pNombre);
    div.appendChild(pDescripcion);
    div.appendChild(pPrioridad);
    div.appendChild(fechaLimite);
    div.appendChild(deleteButton);
    div.appendChild(editButton);

    return div;
};

export { ItemPendiente };
