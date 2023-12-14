/* filename: complex_code.js */

// This code demonstrates a complex application that manages a library system

// Class representing a Book
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  // Method to display book information
  displayInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`);
  }
}

// Class representing a Library
class Library {
  constructor() {
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to display all books in the library
  displayAllBooks() {
    console.log("Library Books:");
    this.books.forEach(book => {
      book.displayInfo();
    });
  }
}

// Create library object
const library = new Library();

// Add books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"));
library.addBook(new Book("1984", "George Orwell", "Science Fiction"));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", "Romance"));

// Display all books in the library
library.displayAllBooks();
  

// Output:
// Library Books:
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Genre: Fiction
// Title: To Kill a Mockingbird, Author: Harper Lee, Genre: Fiction
// Title: 1984, Author: George Orwell, Genre: Science Fiction
// Title: Pride and Prejudice, Author: Jane Austen, Genre: Romance