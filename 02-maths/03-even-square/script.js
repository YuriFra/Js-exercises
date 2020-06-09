
(function() {
    document.getElementById("run").addEventListener("click", function() {
        let message = "";
        for (let i=1; i <= 21; i++){
            let power = i**2;
            message += power + "\n";
            alert(message);
        }
    });
})();
