export class ApiResponse<T> {
    data: T;
    statusCode: Number;
    message: String;
    constructor(data: T, statusCode: Number, message: String) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
    }
}