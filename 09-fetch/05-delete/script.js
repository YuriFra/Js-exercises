
(() => {
    alert("Input a number from 1 to 5");
    document.querySelector('#run').addEventListener('click', () => {
        //check input number
        let heroId = Number(document.getElementById('hero-id').value);
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                    console.log(heroes.filter(hero => hero.id !== heroId));
            })
            .catch(error => console.error(error));
    })
})();
