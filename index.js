import { createController } from './src/controllers/create';
import { deleteController } from './src/controllers/delete';
import { controller, controllerG, controllerU } from './src/controllers/read';
import { updateController } from './src/controllers/update';

import { BadRequestError } from './src/errors/bad-request-error';
import { CustomError } from './src/errors/custom-error';
import { DatabaseConnectionError } from './src/errors/database-connection-error';
import { NotAuthorizedError } from './src/errors/not-authorized-error';
import { NotFoundError } from './src/errors/not-found-error';
import { RequestValidationError } from './src/errors/request-validation-error';

import useAlert from './src/hooks/useAlert';
import usePopover from './src/hooks/usePopover';
import useRequest from './src/hooks/useRequest';
import useShare from './src/hooks/useShare';

import { currentUser } from './src/middlewares/current-user';
import { errorHandler } from './src/middlewares/error-handler';
import { requireAuth } from './src/middlewares/require-auth';
import { validateRequest } from './src/middlewares/validate-request';

import NewWindow from './src/utilities/newwindowutil';
import Password from './src/utilities/passwordutils';
import Singleton from './src/utilities/singletonutils';
import { sortArray, sortByDate, sortByTitle, reorder } from './src/utilities/arrayutils';
import { getName, stringToColour } from './src/utilities/avatarutils';
import { mobileCheck } from './src/utilities/browserutils';
import { drawImageProp } from './src/utilities/canvasutils';
import { clipBoardSelect, clipBoardCopy } from './src/utilities/clipboardutils';
import { uploadtoCloudinary, uploadMultipleFilestoCloudinary } from './src/utilities/cloudinaryutils';
import { debounce, throttle, getCountdownTrigger } from './src/utilities/functionutils';
import { getItemFromStorage, storeItem, removeItemFromStorage } from './src/utilities/locstorageutils';
import { cleanObject, isEmpty, filterObject } from './src/utilities/objectutils';
import { loadScript } from './src/utilities/scriptutils';
import {
    stringtoCode,
    truncateString,
    truncateNumber,
    generateRandInt,
    createUUID,
    isAlphaNumeric,
    isAlphabet
} from './src/utilities/textutils';
import {
    validateBio,
    validateEmail,
    validateFullName,
    validatePassword,
    validateUsername,
    validateWebsite
} from './src/utilities/validateutils';





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

    useAlert,
    usePopover,
    useRequest,
    useShare,

    currentUser,
    errorHandler,
    requireAuth,
    validateRequest,

    Password,
    Singleton,
    NewWindow,
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
    filterObject,
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