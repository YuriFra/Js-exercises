
function test(i) {
    let a = document.getElementById("op-one").value;
    let b = document.getElementById("op-two").value;
    switch(i){
        case 0:
            return parseFloat(a) + parseFloat(b);
        case 1:
            return parseFloat(a) - parseFloat(b);
        case 2:
            return parseFloat(a) * parseFloat(b);
        case 3:
            return parseFloat(a) / parseFloat(b);
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
