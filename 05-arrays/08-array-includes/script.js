
(function() {

    let fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById('run').addEventListener('click', () => {
        let fruit = fruits.includes("apple") ? 'Yes' : 'No';
        console.log(fruit);
    });
})();
