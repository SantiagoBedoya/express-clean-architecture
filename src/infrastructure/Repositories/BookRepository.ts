import { IBookRepository } from '../../core/Interfaces/IBookRepository';
import { Service } from 'typedi';
import { Book } from '../../core/Entities/Book';
import { MongoDbContext } from '../Data/MongoDB/MongoDbContext';
import { Collection } from 'mongodb';

@Service()
class BookRepository implements IBookRepository {

    constructor(
        private readonly _context: MongoDbContext
    ) {
    }

    async CreateBook(book: Book): Promise<Book> {
        const newBook = new this._context.Books(book);
        const result = await newBook.save();
        return new Book(result.name, result.author, result.publishDate);
    }


    async GetBooks(): Promise<Book[]> {
        const books = (await this._context.Books.find()).map(book => new Book(
            book.name,
            book.author,
            book.publishDate
        ));
        return books;
    }


}

export default BookRepository;