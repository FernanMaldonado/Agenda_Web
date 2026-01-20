let AgendaContactos = 'agenda_contactos';

function saveContactsToStorage(contactos) {
    localStorage.setItem(
        AgendaContactos,
        JSON.stringify(contactos)
    );
}

function getContactsFromStorage() {
    return JSON.parse(
        localStorage.getItem(AgendaContactos)
    ) || [];
}

export {
    saveContactsToStorage,
    getContactsFromStorage
};
