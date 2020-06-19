
(function() {
    const DAY_TO_CHECK = 13;
    const DAY_OF_WEEK = 5;
    document.getElementById('run').addEventListener('click', () => {
        const year = parseInt(document.getElementById('year').value);
        for (let month = 0; month < 12; month++) {
            let checkDay = new Date(year, month, DAY_TO_CHECK);
            if (checkDay.getDay() === DAY_OF_WEEK) {
                const name = checkDay.toLocaleString('default', { month: 'long' });
                console.log(name);
            }
        }
    });
})();