
const input = require("prompt-sync")({ sigint: true });


function welcome(): void {
  console.log(" Welcome to the Daily Activity Suggestion System!\n");
}

class Activity {
  name: string;
  mood: string;
  weather: string;
  duration: number; // in minutes

  constructor(name: string, mood: string, weather: string, duration: number) {
    this.name = name;
    this.mood = mood;
    this.weather = weather;
    this.duration = duration;
  }

  display(): void {
    console.log(`Activity: ${this.name} | Mood: ${this.mood} | Weather: ${this.weather} | Duration: ${this.duration} mins`);
  }
}


const activities: Activity[] = [
  new Activity("Go for a walk", "happy", "sunny", 30),
  new Activity("Read a book", "relaxed", "any", 60),
  new Activity("Exercise", "energetic", "any", 45),
  new Activity("Watch a movie", "lazy", "any", 120),
  new Activity("Meditate", "stressed", "any", 20),
  new Activity("Gardening", "happy", "sunny", 40),
];


welcome();


let continueSuggest = "y";
do {
  const mood = input("Enter your mood (happy/relaxed/energetic/lazy/stressed): ").toLowerCase();
  const weather = input("Enter current weather (sunny/rainy/any): ").toLowerCase();
  const availableTime = Number(input("Enter available time in minutes: "));

  console.log("\n Suggested Activities:");
  let found = false;

  
  for (const act of activities) {
    
    if (
      (act.mood === mood || act.mood === "any") &&
      (act.weather === weather || act.weather === "any") &&
      act.duration <= availableTime
    ) {
      act.display();
      found = true;
    }
  }

  if (!found) {
    console.log("No suitable activities found for your mood, weather, and time.");
  }

  continueSuggest = input("\nDo you want another suggestion? (y/n): ").toLowerCase();
} while (continueSuggest === "y");


console.log("\nChoose an action:");
console.log("1 - Show all available activities");
console.log("2 - Show first activity details");
const choice = Number(input("Enter your choice (1 or 2): "));

switch (choice) {
  case 1:
    console.log("\n All Activities:");
    for (const act of activities) {
      act.display();
    }
    break;
  case 2:
    console.log("\nFirst Activity Details:");
    activities[0].display();
    break;
  default:
    console.log("Invalid choice!");
}
