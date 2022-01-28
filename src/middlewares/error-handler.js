import { CustomError } from '../errors/custom-error.js';

export const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) 
        return res.status(err.status_code).json({errors: err.serializeErrors()});
    res.status(400).json({errors: [{ message: 'Something went wrong' }]});
};
