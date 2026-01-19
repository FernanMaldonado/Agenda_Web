let detalleContactos = (contacto) => {
    let overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    let mostrarDetalles = document.createElement("div");
    mostrarDetalles.className = "modal";

    let h3 = document.createElement("h3");
    h3.textContent = "Detalles del contacto";

    let pNombre = document.createElement("p");
    pNombre.textContent = `Nombre: ${contacto.nombre}`;

    let pTelefono = document.createElement("p");
    pTelefono.textContent = `Teléfono: ${contacto.telefono}`;

    let btnCerrar = document.createElement("button");
    btnCerrar.textContent = "Cerrar";

    btnCerrar.addEventListener("click", () => {
        overlay.remove();
    });

    mostrarDetalles.append(h3, pNombre, pTelefono, btnCerrar);
    overlay.appendChild(mostrarDetalles);

    return overlay;
};

export { detalleContactos };
