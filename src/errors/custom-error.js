export class CustomError extends Error{
    status_code;

    constructor(message){
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    serializeErrors(){}
}
