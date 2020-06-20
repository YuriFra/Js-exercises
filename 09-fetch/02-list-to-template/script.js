(() => {
    document.querySelector('#run').addEventListener('click', () => {
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                heroes.forEach(hero => {
                    let temp = document.getElementsByTagName("template")[0];
                    //get all the child elements of the template
                    let cloneTemp = temp.content.cloneNode(true);
                    //add the details of the heroes to the right nodes
                    cloneTemp.querySelector(".name").innerHTML = hero.name;
                    cloneTemp.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    cloneTemp.querySelector(".powers").innerHTML = hero.abilities;
                    // append nodes to target
                    document.querySelector('#target').appendChild(cloneTemp);
                })
            })
            .catch(error => console.error(error));
    })
})();

