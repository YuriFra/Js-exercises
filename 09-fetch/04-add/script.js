
(() => {
    document.querySelector('#run').addEventListener('click', () => {
        //check input
        let heroName = document.getElementById('hero-name').value;
        let heroAlter = document.getElementById('hero-alter-ego').value;
        let heroPow = document.getElementById('hero-powers').value;

        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                //create id number for newHero
                let idCounter = heroes.length +1;
                //split value for multiple powers in array
                let pows = heroPow.split(',');
                //create object to add to array
                let newHero = {id: idCounter, name: heroName, alterEgo: heroAlter, abilities: [pows]};
                heroes.push(newHero);
                console.log(heroes);
            })
            .catch(error => console.error(error));
    })
})();
