const input = require("prompt-sync")({ sigint: true });

function welcomeLibrary(): void {
  console.log(" Welcome to the Library Book Management System!\n");
}


class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  showDetails(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
}


welcomeLibrary();


const books: Book[] = [];


let addMore = "y";
do {
  const title = input("Enter book title: ");
  const author = input("Enter book author: ");
  const year = Number(input("Enter publication year: "));

  const book = new Book(title, author, year);
  books.push(book);

  addMore = input("Do you want to add another book? (y/n): ").toLowerCase();
} while (addMore === "y");


console.log("\n📖 List of Books:");
for (const b of books) {
  b.showDetails();

  
  if (b.year <= 2000) {
    console.log("Status: Old Book\n");
  } else {
    console.log("Status: New Book\n");
  }
}


console.log("Choose an action:");
console.log("1 - Total number of books");
console.log("2 - Show first book details");
const choice = Number(input("Enter your choice (1 or 2): "));

switch (choice) {
  case 1:
    console.log(`Total Books: ${books.length}`);
    break;
  case 2:
    if (books.length > 0) {
      console.log("First book details:");
      books[0].showDetails();
    } else {
      console.log("No books available.");
    }
    break;
  default:
    console.log("Invalid choice!");
}
