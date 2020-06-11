
(function() {
    const item = document.querySelector("#source");
    const elem = document.createElement("img");
    elem.setAttribute("src", item.getAttribute("data-image"));
    document.querySelector("#target").appendChild(elem);
    item.remove("data-image");
})();
