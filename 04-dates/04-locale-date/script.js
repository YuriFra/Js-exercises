
(function() {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value";
    const options = { weekday: 'long', day: 'numeric',  month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'};
    document.getElementById("target").innerHTML = new Date().toLocaleDateString("en-GB", options).replace(":", "h");
})();
