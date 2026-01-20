import { ItemPendiente } from "../../common/itemPendientes/Pendiente.js";
import { getHomeworkFromStorage } from "../../../services/storageToDoList.js";

const ordenPrioridad = {
    "Importante": 1,
    "Leve": 2,
    "Puede esperar": 3
};

let Pendientes = () => {
    let sectionPendientes = document.createElement("section");
    sectionPendientes.className = "pendiente";

    let h2 = document.createElement("h2");
    h2.textContent = "Pendientes";
    sectionPendientes.appendChild(h2);

    let pendientes = getHomeworkFromStorage();

    if (pendientes.length === 0) {
        let p = document.createElement("p");
        p.textContent = "No hay tareas asignadas";
        sectionPendientes.appendChild(p);
        return sectionPendientes;
    }

    pendientes
        .slice()
        .sort(
            (a, b) =>
                ordenPrioridad[a.prioridad] -
                ordenPrioridad[b.prioridad]
        )
        .forEach((pendiente) => {
            sectionPendientes.appendChild(
                ItemPendiente(
                    "todolist.svg",
                    pendiente.nombre,
                    pendiente.descripcion,
                    pendiente.prioridad,
                    pendiente.fechaLimite
                )
            );
        });

    return sectionPendientes;
};

export { Pendientes };
