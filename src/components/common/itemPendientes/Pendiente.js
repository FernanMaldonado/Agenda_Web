import { deleteHomework } from "../../../services/storageToDoList.js";
import { viewContacts, viewToDoList } from "../../layout/nav/NavControlers.js";

let ItemPendiente = (imgPendiente, nombre, descripcion, prioridad,fecha) => {
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

    deleteButton.addEventListener("click", () => {
        deleteHomework(nombre);
         location.reload();
    });

    div.appendChild(etiquetaImg);
    div.appendChild(pNombre);
    div.appendChild(pDescripcion);
    div.appendChild(pPrioridad);
     div.appendChild(fechaLimite);
    div.appendChild(deleteButton);

    return div;
};

export { ItemPendiente };
