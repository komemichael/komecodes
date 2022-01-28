import { CustomError } from './custom-error.js'

export class NotAuthorizedError extends CustomError {
    status_code = 401;

    constructor( message ){
        super('Not Authorized');
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors(){
        return [
            {
                message: 'Not authorized',
            }
        ]
    }
}
