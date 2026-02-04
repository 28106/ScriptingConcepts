function CalculateBill() 
{
	let points = parseInt(prompt("Enter points:"), 10);
	let bill = 0;
	
	
	if(points <= 50) {
	
		bill = points * 2;
	} 
	
	else{
	
		bill = (50*2) + (points - 50) * 5;
	
	}


	alert("Total Bill: "+ bill);

}


CalculateBill();