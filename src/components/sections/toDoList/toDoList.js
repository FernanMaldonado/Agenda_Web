import { ItemPendiente } from "../../common/itemPendientes/Pendiente.js";
import { PendienteList } from "./dbPendientes.js";

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

    PendienteList
        .slice()
        .sort((a, b) => ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad])
        .forEach((pendiente) => {
            sectionPendientes.appendChild(
                ItemPendiente(
                    "todolist.svg",
                    pendiente.nombre,
                    pendiente.descripcion,
                    pendiente.prioridad
                )
            );
        });

    return sectionPendientes;
};

export { Pendientes };
