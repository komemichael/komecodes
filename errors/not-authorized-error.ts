import { CustomError } from './custom-error'

export class NotAuthorizedError extends CustomError {
    status_code = 401;

    constructor(public message: string){
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
