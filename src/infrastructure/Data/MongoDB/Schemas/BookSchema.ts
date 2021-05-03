import { Document, model, Schema } from "mongoose";

export interface IBook extends Document{
    name: String;
    author: String;
    publishDate: Date;
}

const BookSchema = new Schema({
    name: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishDate: { type: Date, required: true }
});

export default model<IBook>('Book', BookSchema);