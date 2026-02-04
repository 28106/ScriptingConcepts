let n = parseInt(prompt("Enter a number: "));

let a = 0, b = 1;

console.log("Fibonacci series up to " + n + ":");

while (a <= n) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

