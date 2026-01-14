import { ContactList } from "../contactos/db.js";  

let registro = function () {
    let form = document.createElement("form");
    form.classList.add("registro");

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = "Registro";

    // Input contacto
    let contact = document.createElement("input");
    contact.type = "text";
    contact.placeholder = "Nombre del contacto";
    contact.required = true;

    // Input teléfono
    let telefono = document.createElement("input");
    telefono.type = "tel";
    telefono.placeholder = "Teléfono";
    telefono.required = true;

    // Botón registrar
    let buttonRegistrar = document.createElement("button");
    buttonRegistrar.type = "submit";
    buttonRegistrar.textContent = "Registrar Contacto";

    // Botón cancelar
    let buttonCancelar = document.createElement("button");
    buttonCancelar.type = "button";
    buttonCancelar.textContent = "Cancelar";
    buttonCancelar.style.background = "#ccc";
    buttonCancelar.style.color = "#333";

    // Agregar elementos
    form.appendChild(h3);
    form.appendChild(contact);
    form.appendChild(telefono);
    form.appendChild(buttonRegistrar);
    form.appendChild(buttonCancelar);

    // Evento submit (AHORA SÍ FUNCIONA)
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
            nombre: contact.value,
            telefono: telefono.value
        };

        console.log(contacto);
        ContactList.push(contacto);

        // Limpiar
        form.reset();
    });

    return form;
};

export { registro };
