
document.getElementById("run").addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 1000000);
    console.log(randomNumber);
    document.body.style.backgroundColor = "#" + randomNumber;
});

/*(function() {

    document.getElementById('run').addEventListener('click', ()=>{
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = '#';

        for (let i=1;i<=6;i++){
            let randomIndex = Math.floor(Math.random()*15);
            color += array[randomIndex];
        }
        console.log(color);
        document.getElementsByTagName('html')[0].style.background = color;
    })
})();*/

