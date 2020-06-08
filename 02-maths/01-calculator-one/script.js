(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let result = (parseFloat(one) + parseFloat(two));
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let result = parseFloat(one) - parseFloat(two);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let result = parseFloat(one) * parseFloat(two);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let result = parseFloat(one) / parseFloat(two);
        alert(result);
    });
})();
