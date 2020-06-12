(function() {
    document.getElementById('run').addEventListener('click', () => {
        const pass = document.getElementById("pass-one").value;
        const rePass = document.getElementById("pass-two").value;
        if (pass === rePass) {
            document.getElementsByTagName("input")[0].style.borderColor = "black";
            document.getElementsByTagName("input")[1].style.borderColor = "black";
            console.log("Passwords match");
        } else {
            document.getElementsByTagName("input")[0].style.borderColor = "red";
            document.getElementsByTagName("input")[1].style.borderColor = "red";
            console.log("Passwords don't match");
        }
    });
})();
