(function() {
    document.querySelectorAll(".actions button").forEach(button => {
        //counter for each button - reset at data-max
        let count = button.dataset.min;
        button.addEventListener("click", () => {
            count < button.dataset.max ? count++ : count = button.dataset.min;
            button.innerHTML = count.toString().padStart(2, '0');
            //output count in target
            let target = document.getElementById("target");
            target.innerHTML = "0";
            document.querySelectorAll(".actions button").forEach(button => {
                target.innerHTML += button.innerHTML;
            })
        })
    })
})();

/*
(function() {
    const targetel = document.getElementById("target");
    const btnOne = document.getElementById("part-one");
    const btnTwo = document.getElementById("part-two");
    const btnThree = document.getElementById("part-three");
    const btnFour = document.getElementById("part-four");
    document.getElementsByClassName("actions")[0].addEventListener("click", (e) => {
        let target = e.target;
        console.log(target)
        let int = parseInt(target.innerText);
        if (int < target.getAttribute("data-max")){
            int++;
            target.innerText = int < 10 ? `0${int}` : int;
        } else {
            int = target.getAttribute("data-min");
            target.innerText = int;
        }
        targetel.innerText = `+${btnOne.innerText}${btnTwo.innerText}${btnThree.innerText}${btnFour.innerText}`;
    })
    document.getElementsByClassName("actions")[0].addEventListener("contextmenu", (e) => {
        e.preventDefault();
        let target = e.target;
        console.log(target)
        let int = parseInt(target.innerText);
        if (int > target.getAttribute("data-min")) {
            int--;
            target.innerText = int < 10 ? "0" + int : int;
        } else {
            int = target.getAttribute("data-max");
            target.innerText = int;
        }
        targetel.innerText = `+${btnOne.innerText}${btnTwo.innerText}${btnThree.innerText}${btnFour.innerText}`;
    })
})();
*/