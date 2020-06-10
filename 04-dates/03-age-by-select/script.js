
(function() {
    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        //console.log(day, month, year);
        let now = new Date();
        let birthday = new Date(`${month}-${day}-${year}`);
        //console.log(now);
        //console.log(birthday);
        let age = now.getFullYear() - birthday.getFullYear();
        let ageM = now.getMonth() - birthday.getMonth();
        if (ageM < 0 || (ageM === 0 && now.getDate() < birthday.getDate())) {
            age = age -1;
        }
        //console.log(age);
        alert(`Your age is ${age}`);
})
})();