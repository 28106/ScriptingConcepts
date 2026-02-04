let a = parseInt(prompt("Enter First Number:"));
let b = parseInt(prompt("Enter Second Number:"));
let c = parseInt(prompt("Enter Third Number:"));

function minmaxmed(a, b, c) {
    let min, med, max;

    if (a >= b && a >= c) {
        max = a;
        med = (b >= c) ? b : c;
        min = (b <= c) ? b : c;
    } 
    else if (b >= a && b >= c) {
        max = b;
        med = (a >= c) ? a : c;
        min = (a <= c) ? a : c;
    } 
    else {
        max = c;
        med = (a >= b) ? a : b;
        min = (a <= b) ? a : b;
    }

    return { min, med, max };
}

let result = minmaxmed(a, b, c);
console.log("Min:", result.min);
console.log("Median:", result.med);
console.log("Max:", result.max);








