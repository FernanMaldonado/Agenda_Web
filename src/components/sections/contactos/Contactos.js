import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage } from "../../../services/storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactos = getContactsFromStorage();

    contactos.forEach((contact) => {
        sectionContactos.appendChild(
            ItemContacto(contact)
        );
    });

    return sectionContactos;
};

export { Contactos };
