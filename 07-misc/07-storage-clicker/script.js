(function() {
    let count = 0;
    document.getElementById("increment").addEventListener("click", () => {
        let target = document.getElementById("target");
        count++;
        target.innerHTML = count.toString();
    })


})();
