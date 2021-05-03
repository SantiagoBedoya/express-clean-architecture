import { Application, NextFunction, Request, Response, Router } from "express";
import Container from "typedi";
import BookController from '../controllers/BookController';

export const BookRouter = (app: Application) => {
    const router: Router = Router();
    const bookController = Container.get(BookController);
    app.use('/books', router);

    router.get('', (req: Request, res: Response) => bookController.GetBooks(req, res));
    router.post('', (req: Request, res: Response) => bookController.CreateBook(req, res));
}