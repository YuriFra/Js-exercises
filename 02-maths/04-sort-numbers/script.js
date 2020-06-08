
(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", function() {
        // your code here
        let row = document.getElementById("numbers").value;
        let message = "";
        for (let i = 0; i<row.length; i++) {
            row.sort((a, b) => a - b);
            message += row + "\n";
            alert(message);
        }
    });
})();
