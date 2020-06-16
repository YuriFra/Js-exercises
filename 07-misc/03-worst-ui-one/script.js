let slider = document.getElementById("slider");
let target = document.getElementById("target");

// Update current slider value each time you drag the slider
slider.oninput = () => {
    target.innerHTML = `0${slider.value}`;
}
