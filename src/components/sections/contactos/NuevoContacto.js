let registro = function () {
    let registro = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Registro";

    let contact = document.createElement("input");
    contact.type = "text";
    contact.placeholder  = "Contacto";

    let telefo = document.createElement("input");
    telefo.type = "text";
    telefo.placeholder  = "Telefo";

    let button = document.createElement("button");
    button.innerHTML = "Registrar Contacto";

    login.appendChild(h3);
    login.appendChild(contact);
    login.appendChild(telefo);
    login.appendChild(button);

    return registro;

}

export {registro};