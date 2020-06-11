
(function() {
    let img = document.getElementsByTagName("img")[0];
    img.onmouseover = () => {
        img.src = img.getAttribute("data-hover");
    };
    img.onmouseleave = () => {
        img.src = "../../_shared/img/kiss.svg";
    };
})();
