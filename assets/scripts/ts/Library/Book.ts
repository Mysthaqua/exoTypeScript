import Author from "./Author.js";

export default interface Book {
  title: string;
  author: Author;
  pages: number;
  isAvailable: boolean;
}
