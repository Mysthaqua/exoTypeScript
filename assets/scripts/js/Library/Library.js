export default class Library {
    constructor(books) {
        this.books = books !== null && books !== void 0 ? books : [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(book) {
        this.books = this.books.filter((b) => b !== book);
    }
    findBookByTitle(title) {
        return this.books.find((book) => (book.title = title));
    }
    listAvailableBooks() {
        return this.books.filter((book) => book.isAvailable);
    }
    getBooksByAuthor(authorName) {
        return this.books.filter((book) => book.author.name === authorName);
    }
}
