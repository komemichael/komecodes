import { BadRequestError } from '../errors/bad-request-error.js';

const updateController = async ( req , res, model ) => {
    let { id } = req.body;

    const currentUser = req.currentUser;
    if (!currentUser) throw new BadRequestError('Unable to get current user');

    try{
        const existingModel = await model.findOneAndUpdate(
            { id: id }, 
            req.body, 
            { new: false, returnOriginal: false,  }
        );  

        if (!existingModel)  throw new BadRequestError('Unable to update existing record');

        const modelToReturn = await model.findOne({ id: existingModel.id })
            .populate( {
                path: 'createdBy',
                select: ['id', 'username', 'avatar'],
            });

        res.status(200).json({success: modelToReturn}); 
    }  catch(err){
        res.status(400).json({error: 'Did not update existing record'}); 
    }
};

export { updateController };
