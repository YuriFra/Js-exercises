(function () {
    let slot = document.querySelectorAll(".field input");
    let buttons = document.querySelectorAll(".field button");
    let isClicked = false;
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            isClicked = true;
            slot.forEach(input => {
                let counter = Math.floor(Math.random() * (input.dataset.max - input.dataset.min + 1) + parseInt(input.dataset.min));
                input.value = counter.toString().padStart(2, '0');
            })
            function timer() {
                if (isClicked === false) {
                    setTimeout(timer, 150);
                } else {
                    //output values in target
                    let target = document.getElementById("target");
                    target.innerHTML = "0";
                    slot.forEach(input => {
                        target.innerHTML += input.value;
                    })
                }
            }
            timer();
        })
    })
})();
/*(function() {
    let slot = document.querySelectorAll(".field input");
        let intervalArr = [];
        slot.forEach(input => {
            intervalArr.push(setInterval(function(){
                let counter = Math.floor(Math.random() * (input.dataset.max - input.dataset.min + 1) + parseInt(input.dataset.min));
                input.value = counter.toString().padStart(2, '0');
            },150))
        });
        //stop timer when button is clicked
        document.querySelectorAll(".field button").forEach(button => {
            let count = 0;
            button.addEventListener("click", () => {
                console.log(intervalArr);
                clearInterval(intervalArr[count]);
                count++;
                //output values in target
                let target = document.getElementById("target");
                target.innerHTML = "0";
                slot.forEach(input => {
                    target.innerHTML += input.value;
                })
            })
        })
})();*/


/*(function(){
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

    Array.from(document.getElementsByClassName("field")).forEach(slot => {
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
                default:
                    return;
            }
        })
    });
})();*/

/*(function() {
    document.getElementById("target").innerText = "460000000";
    var button = document.querySelectorAll("button");
    button.forEach((button) => {
        button.addEventListener('click', () => {
            var input = button.previousSibling.previousSibling;
            var max = Number(input.getAttribute("data-max"));
            var min = Number(input.getAttribute("data-min"));
            var math = Math.floor(Math.random() * (max - min + 1)) + min ;

            input.value = math;
            if (math < 10){
                input.value = "0" + math;
            }

            var one = document.getElementById("part-one").value;
            var two = document.getElementById("part-two").value;
            var three = document.getElementById("part-three").value;
            var four = document.getElementById("part-four").value;
            document.getElementById("target").innerHTML = one + two + three + four ;
        });
    });
})();*/