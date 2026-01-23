let AgendaTareas = "agenda_tareas";

function saveHomeworkToStorage(tareas) {
    localStorage.setItem(
        AgendaTareas,
        JSON.stringify(tareas)
    );
}

let tarea = localStorage.getItem(AgendaTareas);

function getHomeworkFromStorage() {

    if (!tarea) {
        return [];
    }
    try {
        return JSON.parse(tarea);
    } catch {
        localStorage.removeItem(AgendaTareas);
        return [];
    }
}

function deleteHomework(nombreTarea) {
    let tareas = JSON.parse(localStorage.getItem("agenda_tareas")) || [];

    const index = tareas.findIndex(t => t.nombre === nombreTarea);

    if (index !== -1) {
        tareas.splice(index, 1);
        localStorage.setItem("agenda_tareas", JSON.stringify(tareas));
        console.log(`La tarea "${nombreTarea}" fue eliminada.`);
    } else {
        console.log(`La tarea "${nombreTarea}" no se encontró en agenda_tareas.`);
    }
}



export {
    saveHomeworkToStorage,
    getHomeworkFromStorage,
    deleteHomework
};
