
(function() {
    let now = new Date().getHours();
    console.log(now);
    if (now < 18) {
        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        document.getElementById("target").innerHTML = "Hello!";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening!";
    }
})();
