(() => {
    document.getElementById('run').addEventListener('click', () => {
        let myPersons = (error, persons) => {
            if (error) {
                console.error("error");
            } else {
                console.table(persons);
            }
        }
        window.lib.getPersons(myPersons);
    })
})();