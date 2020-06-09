(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", function() {
        let num = parseInt(document.getElementById("number").value);
        function factorial(num) {
            return num ? num * factorial(num - 1) : 1;
        }
        alert(factorial(num))
    });
})();
