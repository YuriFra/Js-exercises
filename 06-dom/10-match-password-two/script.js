(function() {
    HTMLInputElement
    document.getElementById('run').addEventListener('click', () => {
        const pass = document.getElementById("pass-one").value;
        const rePass = document.getElementById("pass-two").value;
        let a = document.getElementsByTagName('input')[0];
        let b = document.getElementsByTagName('input')[1];
        if (pass !== rePass) {
            a.setAttribute('class', "error");
            b.setAttribute('class', "error");
            console.log("Passwords don't match");
        } else {
            console.log("Passwords match");
            a.removeAttribute('class', "error");
            b.removeAttribute('class', "error");
        }
    });
})();
