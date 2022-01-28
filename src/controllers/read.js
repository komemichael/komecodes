import { BadRequestError } from '../errors/bad-request-error.js';
import { NotFoundError } from '../errors/not-found-error.js';

const controllerG = async (req, res, model ) => {
    const { id } = req.body;

    const modelToReturn = await model.findOne({ _id: id, createdBy: req.currentUser.id  }).populate( {
        path: 'createdBy',
        select: ['id', 'username', 'avatar'],
    });
    
    if (!modelToReturn) throw new NotFoundError();
    res.status(200).json({ success: modelToReturn });
};

const controllerU = async (req, res, model ) => {
    const { id } = req.body;

    const modelToReturn = await model.findOne({ _id: id }).populate( {
        path: 'createdBy',
        select: ['id', 'username', 'avatar'],
    });
    
    if (!modelToReturn) throw new NotFoundError();
    res.status(200).json({ success: modelToReturn });
};

const controller = async (req, res, model ) => {
    const skip = parseInt(req.query.skip ) || 0;
    const limit = parseInt(req.query.limit ) || 10;

    try {
        const userId = req.currentUser.id;
        const modelToReturn = await model.find({
            where: { userId },
            include: [{ all: true, }],
            order: [['createdAt', 'DESC']],
        }, undefined, {skip , limit}).populate( {
            path: 'createdBy',
            select: ['id', 'username', 'avatar'],
        });

        if (modelToReturn.length === 0)
            return res.status(200).json({ success: [] });
        res.status(200).json({ success: modelToReturn });
    } catch (error) {
        throw new BadRequestError(error.message);
    }
};

export { controller, controllerG, controllerU };
