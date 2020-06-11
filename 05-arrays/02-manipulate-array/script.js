
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener('click', () => {
        fruits.splice(0, 1, "banana");
        fruits.splice(9, 1, "kiwi");
        console.log(fruits);
    })

})();
