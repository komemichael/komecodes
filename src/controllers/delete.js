import { BadRequestError } from '../errors/bad-request-error.js';

const deleteController = async (req, res, model) => {
    const existingIdentifier = 'id';
    const existing_model = await model.findOne({ [existingIdentifier]: req.body[existingIdentifier] });

    if (!existing_model)
        throw new BadRequestError(`${existingIdentifier} cannot be found`);

    const currentUser = req.currentUser;
    if (!currentUser) 
        throw new BadRequestError('Unable to get current user');

    try{
        const modelToReturn = await model.findOneAndDelete ({
            [existingIdentifier]: req.body[existingIdentifier],
        }); 

        if (!modelToReturn)  
            throw new BadRequestError(`Unable to delete record with id ${req.body[existingIdentifier]}`);
        res.status(204).json({success: modelToReturn}); 
    }  catch(err){
        res.status(400).json({error: `Did not delete record with id ${req.body[existingIdentifier]}`}); 
    }
};

export { deleteController };
