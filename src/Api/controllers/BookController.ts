import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Book } from '../../core/Entities/Book';
import BookRepository from '../../infrastructure/Repositories/BookRepository';
import { ApiResponse } from '../Responses/ApiReponse';

@Service()
class BookController {
    constructor(
        private readonly bookRepository: BookRepository
    ) {
    }
    /**
     * GetBooks
     */
    public async GetBooks(req: Request, res: Response): Promise<Response> {
        const books = await this.bookRepository.GetBooks();
        const response = new ApiResponse(books, 200, 'Libros listados');
        return res.status(200).json(response);
    }

    public async CreateBook(req: Request, res: Response) : Promise<Response>{
        const book = req.body;
        const newBook = await this.bookRepository.CreateBook(book);
        const response = new ApiResponse(newBook, 201, 'Libro creado');
        return res.status(201).json(response);
    }
}

export default BookController;