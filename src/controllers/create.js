import { BadRequestError } from '../errors/bad-request-error.js';

const createController = async ( req, res, existingIdentifier, model, modelInstance ) => {
    const existing_model = existingIdentifier && 
        await model.findOne({ [existingIdentifier]: req.body[existingIdentifier] });

    const currentUser = req.currentUser;
    if (!currentUser) 
        throw new BadRequestError('Unable to get current user');
      
    if (existing_model) 
        throw new BadRequestError(`${existingIdentifier} in use`);

    await modelInstance.save();

    const modelToReturn = await model.findOne({ _id: modelInstance.id, createdBy: req.currentUser.id  })
    .populate( {
        path: 'createdBy',
        select: ['id', 'username', 'avatar'],
    });

    res.status(201).json({success: modelToReturn}); 
};

export { createController };
