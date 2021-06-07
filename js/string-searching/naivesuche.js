async function naiveSuche(delay = 250) {
	// generate array with random elements
	generateString("string", 15);
	generatePattern("pattern", 4);
	
    var string = document.querySelectorAll(".string-element");
	var pattern = document.querySelectorAll(".pattern-element");
	var ausgabe = document.getElementById("demo-ausgabe");
	ausgabe.innerHTML = "Ausgabe: ";
	
	var n = string.length;
	var m = pattern.length;
	
	console.log(n);
	console.log(m);
	
	spinningDemo();
	
	if ((m > 0) && (n >= m)) {
		var i = 0;
		var j = 0;
		
		while ((i <= n - m) && (j <= m - 1)) {
			// change the color of elements to comparing color
			string[i + j].style.backgroundColor = "#CC6677";
			pattern[j].style.backgroundColor = "#CC6677";
			
			// wait for .75 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			
			// change the color of compared elements to previous color
			string[i + j].style.backgroundColor = "#88CCEE";
			pattern[j].style.backgroundColor = "#88CCEE";
			
			if (string[i + j].childNodes[0].innerHTML == pattern[j].childNodes[0].innerHTML) {
				j++;
			} else {
				i++;
				j = 0;
			}
		}
		
		if (j == m) {
			ausgabe.innerHTML = "Ausgabe: Pattern gerfunden bei: " + i;
		}
	}
	
	ausgabe.innerHTML = "Ausgabe: " + n + " (Pattern nicht gefunden)";
	
	stopSpinningDemo();
}