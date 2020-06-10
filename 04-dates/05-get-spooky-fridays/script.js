
(function() {
    document.getElementById('run').addEventListener('click', () => {
        const year = parseInt(document.getElementById('year').value);
        count = 0;
        for (let month = 0; month < 12; month++) {
            let day = new Date(year, month, 13);
            if (day.getDay() === 5) {
                count++;
            }
        }
        alert(`${count} Friday 13th ${year}`);


    });
})();
