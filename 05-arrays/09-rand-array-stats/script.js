
(function() {
    document.getElementById('run').addEventListener('click', () => {
        let numbers = [];
        for (let i = 1; i <= 10; i++) {
            let tableNr = Math.floor(Math.random() * 100 + 1);
            document.getElementById("n-" + i).innerText = tableNr;
            numbers.push(tableNr);
        }
        // smallest number
        document.getElementById('min').innerText = numbers.reduce((a, b) => a > b ? a : b);
        // biggest number
        document.getElementById('max').innerText = numbers.reduce((a, b) => a < b ? a : b);
        // sum
        document.getElementById('sum').innerText = numbers.reduce((a, b) => a + b, 0);
        // average
        document.getElementById('average').innerText = numbers.reduce((a, b) => a + b) / numbers.length;
    })
})();
