// Install prompt-sync first: npm install prompt-sync
var input = require("prompt-sync")({ sigint: true });
// 1️⃣ Function - Welcome
function welcome() {
    console.log("🌟 Welcome to the Daily Activity Suggestion System!\n");
}
// 2️⃣ Class - Activity
var Activity = /** @class */ (function () {
    function Activity(name, mood, weather, duration) {
        this.name = name;
        this.mood = mood;
        this.weather = weather;
        this.duration = duration;
    }
    Activity.prototype.display = function () {
        console.log("Activity: ".concat(this.name, " | Mood: ").concat(this.mood, " | Weather: ").concat(this.weather, " | Duration: ").concat(this.duration, " mins"));
    };
    return Activity;
}());
// 3️⃣ Predefined Activities
var activities = [
    new Activity("Go for a walk", "happy", "sunny", 30),
    new Activity("Read a book", "relaxed", "any", 60),
    new Activity("Exercise", "energetic", "any", 45),
    new Activity("Watch a movie", "lazy", "any", 120),
    new Activity("Meditate", "stressed", "any", 20),
    new Activity("Gardening", "happy", "sunny", 40),
];
// 4️⃣ Main Program
welcome();
// 5️⃣ Do-While Loop - Get multiple suggestions
var continueSuggest = "y";
do {
    var mood = input("Enter your mood (happy/relaxed/energetic/lazy/stressed): ").toLowerCase();
    var weather = input("Enter current weather (sunny/rainy/any): ").toLowerCase();
    var availableTime = Number(input("Enter available time in minutes: "));
    console.log("\n💡 Suggested Activities:");
    var found = false;
    // 6️⃣ For Loop - Check each activity
    for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
        var act = activities_1[_i];
        // 7️⃣ If/Else - Match conditions
        if ((act.mood === mood || act.mood === "any") &&
            (act.weather === weather || act.weather === "any") &&
            act.duration <= availableTime) {
            act.display();
            found = true;
        }
    }
    if (!found) {
        console.log("No suitable activities found for your mood, weather, and time.");
    }
    continueSuggest = input("\nDo you want another suggestion? (y/n): ").toLowerCase();
} while (continueSuggest === "y");
// 8️⃣ Switch - Show options
console.log("\nChoose an action:");
console.log("1 - Show all available activities");
console.log("2 - Show first activity details");
var choice = Number(input("Enter your choice (1 or 2): "));
switch (choice) {
    case 1:
        console.log("\n📋 All Activities:");
        for (var _a = 0, activities_2 = activities; _a < activities_2.length; _a++) {
            var act = activities_2[_a];
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
