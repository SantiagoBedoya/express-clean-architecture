import mongoose from 'mongoose';
import BookSchema from './Schemas/BookSchema';
import { Service } from "typedi";

@Service()
export class MongoDbContext {

    public get Books(){
        return BookSchema;
    }

    constructor(){
        try {
            const connectionString = process.env[`MONGO_DB_${process.env.STAGE}`];
            mongoose.connect(connectionString || '', {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            }).then(connection => {
                console.log('Database:\tConnected');
            })
        } catch (error) {
            throw new Error("NO DATABASE CONNECTED");
        }
    }

}