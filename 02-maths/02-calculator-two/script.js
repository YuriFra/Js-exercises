
function test(i) {
    const a = parseFloat(document.getElementById("op-one").value);
    const b = parseFloat(document.getElementById("op-two").value);
    switch(i){
        case 0:
            return a + b;
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return;
    }
}
(function() {
    const operators = document.getElementsByClassName('operator');
    for (let i=0;i<operators.length;i++){
        operators[i].addEventListener('click', function(){
            alert(test(i));
        })
    }
})();
