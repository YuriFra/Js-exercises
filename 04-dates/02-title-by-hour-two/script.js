(function() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    console.log(hour, min);
    if (hour === 17 && min > 30) {
        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        document.getElementById("target").innerHTML = "Good evening!";
    }
    else {
        document.getElementById("target").innerHTML = "Hello!";
    }
})();
