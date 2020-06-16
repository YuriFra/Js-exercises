
let target = document.getElementById("target");
let i = 0;
let text = target.innerHTML;
target.innerHTML = "";
function typeWriter() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, Math.floor(Math.random() * 6) * 50);
        }
    }
typeWriter();




