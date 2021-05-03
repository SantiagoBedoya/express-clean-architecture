export class Book {
    name: String;
    author: String;
    publishDate: Date;

    constructor(name: String, author: String, publishDate: Date){
        this.name = name;
        this.author = author;
        this.publishDate = publishDate;
    }
}