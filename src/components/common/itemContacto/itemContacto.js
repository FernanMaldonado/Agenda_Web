import { detalleContactos } from "../../sections/detalleContactos/DetalleContacto.js";

let ItemContacto = (contacto) => {
    let div = document.createElement("div");
    div.className = "item-Contacto";

    let img = document.createElement("img");
    img.src = contacto.img
        ? `./assets/icons/${contacto.img}`
        : "./assets/icons/user.svg";

    let nombre = document.createElement("p");
    nombre.textContent = contacto.nombre;

    let telefono = document.createElement("p");
    telefono.textContent = contacto.telefono;

    let favLabel = document.createElement("label");
    favLabel.className = "fav-label";

    let favInput = document.createElement("input");
    favInput.type = "checkbox";
    favInput.checked = contacto.favorito === true;



    let star = document.createElement("span");
    star.className = "star";

    favLabel.append(favInput, star);
    favLabel.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    favInput.addEventListener("change", () => {
        contacto.favorito = favInput.checked;
        console.log("Favorito:", contacto.nombre, contacto.favorito);
    });

    

    div.addEventListener("click", () => {
        document.body.appendChild(detalleContactos(contacto));
    });

    div.append(img, nombre, telefono, favLabel);

    return div;
};

export { ItemContacto };
