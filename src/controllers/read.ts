import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { BadRequestError } from '../errors/bad-request-error';
import { NotFoundError } from '../errors/not-found-error';

const controllerG = async (req: Request, res: Response, model: mongoose.Model<any> ) => {
    const { id } = req.body;

    const modelToReturn = await model.findOne({ _id: id, createdBy: req.currentUser!.id  }).populate( {
        path: 'createdBy',
        select: ['id', 'username', 'avatar'],
    });
    
    if (!modelToReturn) throw new NotFoundError();
    res.status(200).json({ success: modelToReturn });
};

const controllerU = async (req: Request, res: Response, model: mongoose.Model<any> ) => {
    const { id } = req.body;

    const modelToReturn = await model.findOne({ _id: id }).populate( {
        path: 'createdBy',
        select: ['id', 'username', 'avatar'],
    });
    
    if (!modelToReturn) throw new NotFoundError();
    res.status(200).json({ success: modelToReturn });
};

const controller = async (req: Request, res: Response, model: mongoose.Model<any> ) => {
    const skip: number = parseInt(req.query.skip as string) || 0;
    const limit: number = parseInt(req.query.limit as string) || 10;

    try {
        const userId = req.currentUser!.id;
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
    } catch (error: any) {
        throw new BadRequestError(error.message);
    }
};

export { controller, controllerG, controllerU };