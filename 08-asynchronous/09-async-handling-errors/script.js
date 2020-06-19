
(() => {
    document.querySelector('#run').addEventListener('click', () => {
        async function processPersons(persons) {
            try {
                let persons = await window.lib.getPersons(persons);
                return console.table(persons);
            }
            catch (error) {
                console.error('ERROR');
            }
        }
        let persons = processPersons();
        console.table(persons);
    })
})();