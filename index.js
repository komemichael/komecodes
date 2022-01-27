import { createController } from './controllers/create';
import { deleteController } from './controllers/delete';
import { controller, controllerG, controllerU } from './controllers/read';
import { updateController } from './controllers/update';

import { BadRequestError } from './errors/bad-request-error';
import { CustomError } from './errors/custom-error';
import { DatabaseConnectionError } from './errors/database-connection-error';
import { NotAuthorizedError } from './errors/not-authorized-error';
import { NotFoundError } from './errors/not-found-error';
import { RequestValidationError } from './errors/request-validation-error';

import { currentUser } from './middlewares/current-user';
import { errorHandler } from './middlewares/error-handler';
import { requireAuth } from './middlewares/require-auth';
import { validateRequest } from './middlewares/validate-request';

import {Password} from './utilities/passwordutils';
import {Singleton} from './utilities/singletonutils';
import { sortArray, sortByDate, sortByTitle, reorder } from './utilities/arrayutils';
import { getName, stringToColour } from './utilities/avatarutils';
import { mobileCheck } from './utilities/browserutils';
import { drawImageProp } from './utilities/canvasutils';
import { clipBoardSelect, clipBoardCopy } from './utilities/clipboardutils';
import { uploadtoCloudinary, uploadMultipleFilestoCloudinary } from './utilities/cloudinaryutils';
import { debounce, throttle, getCountdownTrigger } from './utilities/functionutils';
import { getItemFromStorage, storeItem, removeItemFromStorage } from './utilities/locstorageutils';
import { cleanObject, isEmpty, filterObject } from './utilities/objectutils';
import { loadScript } from './utilities/scriptutils';
import {
    stringtoCode,
    truncateString,
    truncateNumber,
    generateRandInt,
    createUUID,
    isAlphaNumeric,
    isAlphabet
} from './utilities/textutils';
import {
    validateBio,
    validateEmail,
    validateFullName,
    validatePassword,
    validateUsername,
    validateWebsite
} from './utilities/validateutils';






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


    StyledFab,
    StyledTextField,
    StyledButton,
    StyledHR,
    StyledIconButton,
    StyledPaperCardPaper,
    StyledClippy,
    StyledAccordion,
    StyledSpeedDial,
    StyledImageBox,
    Rotate,
    CardSkeleton,
    PaperCard,
    Flex,
    AutoComplete,
    Swipeable,
    ClipComponent,
    AlignItemsList,
    DateTimePickerUtil,
    AccordionUtil,
    BasicPopover,
    FullScreenDialogUtil,
    ImageListUtil,
    BackdropUtil,
}