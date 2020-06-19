(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPersons()
            .then((persons) => console.table(persons))
            .catch((error) => console.error(error))
    })
})();
