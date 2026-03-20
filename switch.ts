let day = 3;
switch(day) {
	case 1:
		console.log("Monday");
		break;
	case 2: 
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	default:
		console.log("Invalid day");
}

for(let i = 1; i <= 5; i++){

	console.log("Number:" + i);
}


let i = 1;
while(i <= 10) {
	console.log("Counting:" + i);
	i++;
}


let j = 1;
do {
	console.log("Do-While:" + j);
	j++;
} while ( j <= 5);



class Person{
	name: string;
	age: number;
	
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	
	greet() {
	
	console.log(`Hello, my name is ${this.name}`);
	}
}


let person1 = new Person("Alice", 25);
person1.greet();
console.log("Age:" + person1.age);