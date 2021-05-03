import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import { BookRouter } from './Api/Routes/BookRoutes';
dotenv.config();

export class App {

    private readonly port: String;
    public app: Application;

    constructor(port: String = '3000') {
        this.port = process.env.PORT || port;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.handlers();
    }

    private settings() {
        this.app.set('port', this.port);
    }

    private routes() {
        BookRouter(this.app);
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    private handlers() {

    }

    public listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server: \thttp://localhost:${this.app.get('port')}`);
        })
    }
}