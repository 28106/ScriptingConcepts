// Use require for simplicity
const prompt = require("prompt-sync")({ sigint: true });

const age = Number(prompt("Enter your age: "));

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
