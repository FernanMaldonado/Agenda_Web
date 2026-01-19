let ItemPendiente= (imgPendiente,nombre, descripcion, prioridad) => {
    let div = document.createElement("div");
    div.className = "item-pendiente";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgPendiente}`;

    let pNombre = document.createElement("p");
    pNombre.textContent = nombre;

    let pDescripcion = document.createElement("p");
    pDescripcion.textContent = descripcion;

    let pPrioridad = document.createElement("p");
    pPrioridad.textContent = `Prioridad: ${prioridad}`;

    div.appendChild(etiquetaImg);
    div.appendChild(pNombre);
    div.appendChild(pDescripcion);
    div.appendChild(pPrioridad);

    return div;
};

export { ItemPendiente };
