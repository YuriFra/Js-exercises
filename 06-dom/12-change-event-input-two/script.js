(function() {
    document.getElementById("pass-one").setAttribute("minLength", "8");
    document.getElementById("pass-one").oninput = () => {
        let string = document.getElementById("pass-one").value;
        let pass = /^(?=(\D*\d){2,}).{2,}(?=.*[a-zA-Z]).{6,}$/;
        if (pass.test(string)) {
            document.getElementById("validity").innerHTML = "Ok";
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    }
})();
