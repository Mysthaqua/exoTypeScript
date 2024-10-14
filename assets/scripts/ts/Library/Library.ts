import Book from "./Book.js";

export default class Library {
  books: Book[];

  constructor(books?: Book[]) {
    this.books = books ?? [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(book: Book): void {
    this.books = this.books.filter((b) => b !== book);
  }

  findBookByTitle(title: string): Book {
    return this.books.find((book) => (book.title = title));
  }

  listAvailableBooks(): Book[] {
    return this.books.filter((book) => book.isAvailable);
  }

  getBooksByAuthor(authorName: string): Book[] {
    return this.books.filter((book) => book.author.name === authorName);
  }
}
