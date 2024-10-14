import Author from "./Author.js";
import Book from "./Book.js";
import Library from "./Library.js";

const createBook = (title: string, author: Author, pages: number): Book => {
  return {
    title,
    author,
    pages,
    isAvailable: true,
  };
};

const toggleAvailability = (book: Book): void => {
  book.isAvailable = !book.isAvailable;
};

const library: Library = new Library();

const tolkien: Author = {
  name: "J. R. R. Tolkien",
  birthYear: new Date(1892, 1, 3),
  genres: ["fantasy"],
};

const leSilmarillion: Book = createBook("Le Silmarillion", tolkien, 365);
const laCommunauteDeLanneau: Book = createBook(
  "La Communauté de l'Anneau",
  tolkien,
  423
);
const lesDeuxTours: Book = createBook("Les Deux Tours", tolkien, 352);
const leRetourDuRoi: Book = createBook("Le Retour du Roi", tolkien, 416);

toggleAvailability(leSilmarillion);

library.addBook(leSilmarillion);
library.addBook(laCommunauteDeLanneau);
library.addBook(lesDeuxTours);
library.addBook(leRetourDuRoi);

console.log(library.findBookByTitle("Le Silmarillion"));
console.log(library.listAvailableBooks());

library.removeBook(leRetourDuRoi);

console.log(library.getBooksByAuthor(tolkien.name));
