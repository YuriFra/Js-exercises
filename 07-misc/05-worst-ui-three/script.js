(function() {
    let slot = document.querySelectorAll(".field input");
    slot.forEach(input => {
        //get random number between data-min & max in input field
        let timer = setInterval(() => {
            let counter;
            input.dataset.min < 10 ? counter = Math.floor(Math.random() * input.dataset.max + 1) : counter = Math.floor(Math.random() * 40 + 460);
            input.value = counter.toString().padStart(2, '0');
        }, 150);
        //stop timer when button is clicked
        document.querySelectorAll(".field button").forEach(button => {
            button.addEventListener("click", () => {
                    clearInterval(timer);
                //output values in target
                let target = document.getElementById("target");
                target.innerHTML = "0";
                slot.forEach(input => {
                    target.innerHTML += input.value;
                })
            })
        })
    })
})();
/*
(function(){
    const timer_one = setInterval(() => {
        document.getElementById("part-one").value = Math.floor(Math.random() * 40 + 460);
    }, 100);
    const timer_two = setInterval(() => {
        document.getElementById("part-two").value = Math.floor(Math.random() * 100);
    }, 100)
    const timer_three = setInterval(() => {
        document.getElementById("part-three").value = Math.floor(Math.random() * 100);
    }, 100)
    const timer_four = setInterval(() => {
        document.getElementById("part-four").value = Math.floor(Math.random() * 100);
    }, 100)

    Array.from(document.getElementsByClassName("field"))
        .forEach(slot => {
            slot.addEventListener("click", e => {
                let id = e.target.id;
                switch (id.split("-")[2]) {
                    case "one":
                        clearInterval(timer_one);
                        break;
                    case "two":
                        clearInterval(timer_two);
                        break;
                    case "three":
                        clearInterval(timer_three);
                        break;
                    case "four":
                        clearInterval(timer_four);
                        break;
                    default: return;
                })
                })
            }) */