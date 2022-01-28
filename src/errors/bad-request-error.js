import { CustomError } from './custom-error.js'

export class BadRequestError extends CustomError {
    status_code = 400;

    constructor(message){
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(){
        return [
            {
                message: this.message
            }
        ]
    }
}
