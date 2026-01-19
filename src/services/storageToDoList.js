let AgendaTareas = "agenda_tareas";

function saveHomeworkToStorage(tareas) {
    localStorage.setItem(
        AgendaTareas,
        JSON.stringify(tareas)
    );
}

function getHomeworkFromStorage() {
    let tarea = localStorage.getItem(AgendaTareas);

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

export {
    saveHomeworkToStorage,
    getHomeworkFromStorage
};
