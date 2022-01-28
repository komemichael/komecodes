import { createController } from './src/controllers/create.js';
import { deleteController } from './src/controllers/delete.js';
import { controller, controllerG, controllerU } from './src/controllers/read.js';
import { updateController } from './src/controllers/update.js';

import { BadRequestError } from './src/errors/bad-request-error.js';
import { CustomError } from './src/errors/custom-error.js';
import { DatabaseConnectionError } from './src/errors/database-connection-error.js';
import { NotAuthorizedError } from './src/errors/not-authorized-error.js';
import { NotFoundError } from './src/errors/not-found-error.js';
import { RequestValidationError } from './src/errors/request-validation-error.js';

import { currentUser } from './src/middlewares/current-user.js';
import { errorHandler } from './src/middlewares/error-handler.js';
import { requireAuth } from './src/middlewares/require-auth.js';
import { validateRequest } from './src/middlewares/validate-request.js';

import {Password} from './src/utilities/passwordutils.js';
import {Singleton} from './src/utilities/singletonutils.js';
import { sortArray, sortByDate, sortByTitle, reorder } from './src/utilities/arrayutils.js';
import { getName, stringToColour } from './src/utilities/avatarutils.js';
import { mobileCheck } from './src/utilities/browserutils.js';
import { drawImageProp } from './src/utilities/canvasutils.js';
import { clipBoardSelect, clipBoardCopy } from './src/utilities/clipboardutils.js';
import { uploadtoCloudinary, uploadMultipleFilestoCloudinary } from './src/utilities/cloudinaryutils.js';
import { debounce, throttle, getCountdownTrigger } from './src/utilities/functionutils.js';
import { getItemFromStorage, storeItem, removeItemFromStorage } from './src/utilities/locstorageutils.js';
import { cleanObject, isEmpty } from './src/utilities/objectutils.js';
import { loadScript } from './src/utilities/scriptutils.js';
import {
    stringtoCode,
    truncateString,
    truncateNumber,
    generateRandInt,
    createUUID,
    isAlphaNumeric,
    isAlphabet
} from './src/utilities/textutils.js';
import {
    validateBio,
    validateEmail,
    validateFullName,
    validatePassword,
    validateUsername,
    validateWebsite
} from './src/utilities/validateutils.js';




export {

    createController,
    deleteController,
    controller,
    controllerG,
    controllerU,
    updateController,

    BadRequestError,
    CustomError,
    DatabaseConnectionError,
    NotAuthorizedError,
    NotFoundError,
    RequestValidationError,

    currentUser,
    errorHandler,
    requireAuth,
    validateRequest,

    Password,
    Singleton,
    sortArray,
    sortByDate,
    sortByTitle,
    reorder,
    getName,
    stringToColour,
    mobileCheck,
    drawImageProp,
    clipBoardSelect,
    clipBoardCopy,
    uploadtoCloudinary,
    uploadMultipleFilestoCloudinary,
    debounce,
    throttle,
    getCountdownTrigger,
    getItemFromStorage,
    storeItem,
    removeItemFromStorage,
    cleanObject,
    isEmpty,
    loadScript,
    stringtoCode,
    truncateString,
    truncateNumber,
    validateEmail,
    generateRandInt,
    createUUID,
    isAlphaNumeric,
    isAlphabet,
    validateBio,
    validateFullName,
    validatePassword,
    validateUsername,
    validateWebsite,
}
