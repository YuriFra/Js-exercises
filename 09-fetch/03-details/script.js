
(() => {
    alert("Input a number from 1 to 5");
    document.querySelector('#run').addEventListener('click', () => {
        //check input number
        let heroId = Number(document.getElementById('hero-id').value);
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                heroes.forEach(hero => {
                    if (hero.id === heroId) {
                        let temp = document.getElementsByTagName("template")[0];
                        let cloneTemp = temp.content.cloneNode(true);
                        cloneTemp.querySelector(".name").innerHTML = hero.name;
                        cloneTemp.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                        cloneTemp.querySelector(".powers").innerHTML = hero.abilities;
                        document.querySelector('#target').appendChild(cloneTemp);
                    }
                })
            })
            .catch(error => console.error(error));
    })
})();

