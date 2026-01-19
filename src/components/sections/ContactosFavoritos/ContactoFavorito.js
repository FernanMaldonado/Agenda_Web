import { ContactList } from "../contactos/db.js";
import { ItemContacto } from "../../common/itemContacto/itemContacto.js";

let Favoritos = () => {
    let section = document.createElement("section");
    section.className = "favoritos";

    let h2 = document.createElement("h2");
    h2.textContent = "Favoritos";
    section.appendChild(h2);

    let favoritos = ContactList.filter(c => c.favorito === true);

    if (favoritos.length === 0) {
        let p = document.createElement("p");
        p.textContent = "No hay contactos favoritos";
        section.appendChild(p);
        return section;
    }

    favoritos.forEach(contacto => {
        section.appendChild(ItemContacto(contacto));
    });

    return section;
};

export { Favoritos };
