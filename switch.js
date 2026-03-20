var day = 3;
switch (day) {
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
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log("Number:" + i_1);
}
var i = 1;
while (i <= 10) {
    console.log("Counting:" + i);
    i++;
}
var j = 1;
do {
    console.log("Do-While:" + j);
    j++;
} while (j <= 5);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person("Alice", 25);
person1.greet();
console.log("Age:" + person1.age);
