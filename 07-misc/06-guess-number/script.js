(function() {
    let attempts = 0;
    let x = Math.floor(Math.random() * 100);
    console.log(x);
    let guess = prompt("Enter a number between 1 and 100");
    while (true) {
        attempts++;
        if (guess > x) {
            guess = prompt("Lower");
        } else if (guess < x) {
            guess = prompt("Higher");
        } else {
            alert("That's right! " + "You needed " + attempts + " attempts");
            break;
        }
    }
})();
