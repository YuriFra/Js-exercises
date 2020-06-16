(function() {
    document.getElementById("pass-one").setAttribute("maxLength", "10");
    document.getElementById("pass-one").oninput = () => {
        let stringLen = document.getElementById("pass-one").value.length;
        for (let i = 1; i <=10; i++) {
            document.getElementById("counter").innerHTML = stringLen + "/10";
        }
    }
})();
