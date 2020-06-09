
(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", function() {
        let row = document.getElementById("numbers").value;
        let result = row.split(",");
        let sorting = result.sort((a, b) => a - b);
        alert(sorting)
    });
})();
