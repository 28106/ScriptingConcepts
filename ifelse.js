// Use require for simplicity
var prompt = require("prompt-sync")({ sigint: true });
var age = Number(prompt("Enter your age: "));
if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}
