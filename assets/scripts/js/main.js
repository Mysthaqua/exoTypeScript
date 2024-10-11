import Library from "./Library.js";
const createBook = (title, author, pages) => {
    return {
        title,
        author,
        pages,
        isAvailable: true,
    };
};
const toggleAvailability = (book) => {
    book.isAvailable = !book.isAvailable;
};
const library = new Library();
const tolkien = {
    name: "J. R. R. Tolkien",
    birthYear: new Date(1892, 1, 3),
    genres: ["fantasy"],
};
const leSilmarillion = createBook("Le Silmarillion", tolkien, 365);
const laCommunauteDeLanneau = createBook("La Communauté de l'Anneau", tolkien, 423);
const lesDeuxTours = createBook("Les Deux Tours", tolkien, 352);
const leRetourDuRoi = createBook("Le Retour du Roi", tolkien, 416);
toggleAvailability(leSilmarillion);
library.addBook(leSilmarillion);
library.addBook(laCommunauteDeLanneau);
library.addBook(lesDeuxTours);
library.addBook(leRetourDuRoi);
console.log(library.findBookByTitle("Le Silmarillion"));
console.log(library.listAvailableBooks());
library.removeBook(leRetourDuRoi);
console.log(library.getBooksByAuthor(tolkien.name));
