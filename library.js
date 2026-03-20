var input = require("prompt-sync")({ sigint: true });
function welcomeLibrary() {
    console.log(" Welcome to the Library Book Management System!\n");
}
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.showDetails = function () {
        console.log("Title: ".concat(this.title, ", Author: ").concat(this.author, ", Year: ").concat(this.year));
    };
    return Book;
}());
welcomeLibrary();
var books = [];
var addMore = "y";
do {
    var title = input("Enter book title: ");
    var author = input("Enter book author: ");
    var year = Number(input("Enter publication year: "));
    var book = new Book(title, author, year);
    books.push(book);
    addMore = input("Do you want to add another book? (y/n): ").toLowerCase();
} while (addMore === "y");
console.log("\n📖 List of Books:");
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var b = books_1[_i];
    b.showDetails();
    if (b.year <= 2000) {
        console.log("Status: Old Book\n");
    }
    else {
        console.log("Status: New Book\n");
    }
}
console.log("Choose an action:");
console.log("1 - Total number of books");
console.log("2 - Show first book details");
var choice = Number(input("Enter your choice (1 or 2): "));
switch (choice) {
    case 1:
        console.log("Total Books: ".concat(books.length));
        break;
    case 2:
        if (books.length > 0) {
            console.log("First book details:");
            books[0].showDetails();
        }
        else {
            console.log("No books available.");
        }
        break;
    default:
        console.log("Invalid choice!");
}
