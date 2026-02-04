function pyramid(n) {
	for(let i = 1; i<=n; i++){

		let row = "";
		
		
	for(let j = n-i; j > 0;j--) {
	
		row += " ";
	}
	
	for(let k = 1; k <= 2 * i -1; k++) {
		row += "*";
	}
	
	console.log(row);
		}
}

pyramid(5);