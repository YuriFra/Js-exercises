(function() {
    let counter = localStorage.getItem("counter");
    document.getElementById('target').innerHTML = counter;
    document.getElementById("increment").addEventListener("click", () => {
        counter === null ? counter = 0 : counter++;
        document.getElementById('target').innerHTML = counter;
    localStorage.setItem("counter", counter);
});
})();