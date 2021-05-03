import { Book } from '../Entities/Book';
export interface IBookRepository {
     GetBooks() : Promise<Book[]>
     CreateBook(book: Book) : Promise<Book>
}