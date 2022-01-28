import { CustomError } from './custom-error.js'

export class RequestValidationError extends CustomError {
    status_code = 400;

    constructor( errors ){
        super('Error validation');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(){
        const formatted_errors = this.errors.map(error => {
            return {message: error.msg, field: error.param}
        });
        return formatted_errors;
    }
}
