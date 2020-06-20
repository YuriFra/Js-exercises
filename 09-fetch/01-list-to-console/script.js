
(() => {
    document.querySelector('#run').addEventListener('click', () => {
        fetch('../../_shared/api.json')
            .then(data => data.json())
            .then(heroes => console.log(heroes))
            .catch(error => console.error(error));
    })
})();
