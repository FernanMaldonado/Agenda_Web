import {
    getContactsFromStorage,
    saveContactsToStorage
} from "../../../services/storage.js";

let registro = function () {
    let form = document.createElement("form");
    form.classList.add("registro");

    let h3 = document.createElement("h3");
    h3.textContent = "Registro";

    let contact = document.createElement("input");
    contact.type = "text";
    contact.placeholder = "Nombre del contacto";
    contact.required = true;

    let telefono = document.createElement("input");
    telefono.type = "tel";
    telefono.placeholder = "Teléfono";
    telefono.required = true;

    let buttonRegistrar = document.createElement("button");
    buttonRegistrar.type = "submit";
    buttonRegistrar.textContent = "Registrar Contacto";

    let buttonCancelar = document.createElement("button");
    buttonCancelar.type = "button";
    buttonCancelar.textContent = "Cancelar";
    buttonCancelar.style.background = "#ccc";
    buttonCancelar.style.color = "#333";

    form.appendChild(h3);
    form.appendChild(contact);
    form.appendChild(telefono);
    form.appendChild(buttonRegistrar);
    form.appendChild(buttonCancelar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
            nombre: contact.value,
            telefono: telefono.value
        };

        let contactos = getContactsFromStorage();
        contactos.push(contacto);
        saveContactsToStorage(contactos);

        form.reset();
    });

    return form;
};

export { registro };
