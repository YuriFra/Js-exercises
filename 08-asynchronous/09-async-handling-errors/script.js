(() => {
    document.querySelector('#run').addEventListener('click', () => {
        async function processPersons() {
            try {
                let persons = await window.lib.getPersons();
                console.table(persons);
            }
            catch (error) {
                console.error('ERROR');
            }
        }
        console.warn(processPersons());
    })
})();


/*
(() => {
    const processPersons = async () => {
        try {
            let persons = await window.lib.getPersons();
            console.table(persons);
        } catch (error) {
            console.error('ERROR');
        }
    }
    processPersons();
})();*/