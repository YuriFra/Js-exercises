
(() => {
	let size = ["12px", "18px", "24px", "30px", "36px", "42px"];
	let text = document.getElementById("target").innerHTML;
	const target = document.getElementById("target");
	let trigger = true;
	let counter = 0;
	setInterval(() => {
		target.innerHTML = "";
		for (let i = 0; i < text.length; i++) {
			let letter = text.charAt(i);
			let span = document.createElement("span");
			span.style.fontSize = size[counter];
			span.appendChild(document.createTextNode(letter));
			trigger ? counter++ : counter--;
			if (counter === 6) {
				trigger = false;
				counter--;
			} else if (counter === -1) {
				trigger = true;
				counter++;
			}
			target.appendChild(span);
		}
	}, 500);
})();
/*
	setInterval(() => {
		const text = document.getElementById('target').innerText;
		let displayArr = [];
		for (let i = 0; i < text.length; i++) {
			let letter = text[i];
			displayArr.push(`<span style="font-size: ${1 + 0.5 * Math.floor(Math.random() * 6)}rem">${letter}</span>`)
		}
		document.getElementById('target').innerHTML = displayArr.join('');
	}, 1000)
*/

/*
	let fontSizes = ["14px", "18px", "22px", "26px", "30px"];
	let target = document.getElementById('target');
	let string = target.innerHTML;
	let stringArray = [];
	for(let i = 0; i < string.length; i++){
		let thisLetter = target.innerHTML.charAt(i);
		stringArray.push(thisLetter);
	}
	let size = 0;

    function wave(){
    	function sizeChange() {
    		if (size < 4 && up == true) {
    			size++;
    		}
    		if (size > 0 && up == false) {
    			size--;
    		}
    		if (size == 4) {
    			up = false;
    		}
    		if (size == 0){
    			up = true;
    		}
    	}
    	let up = true;
    	target.innerHTML = "";
    	for(let i = 0; i < stringArray.length; i++){
    		target.innerHTML += '<span style="font-size: '+fontSizes[size]+';">'+stringArray[i]+'</span>';
    		if (size < 4 && up == true) {
    			size++;
    		}
    		if (size > 0 && up == false) {
    			size--;
    		}
    		if (size == 4) {
    			up = false;
    		}
    		if (size == 0){
    			up = true;
    		}
    	}
    	setTimeout(wave, 1000);
    }

    wave();*/