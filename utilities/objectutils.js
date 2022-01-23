export const filterNullValues = (object_to_filter) => {
    const object_to_return = Object.keys(object_to_filter)
        .filter((key) => object_to_filter[key] !== '')
        .reduce((obj, key) => {
            obj[key] = object_to_filter[key];
            return obj;
        }, {});
    return object_to_return;
}

export const isEmpty = (object_to_check) => {
    return object_to_check && Object.keys(object_to_check).length === 0;
}

export const cleanObject = (obj) => {
    for (const propName in obj) {
        if (!obj[propName] || obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    return obj;
};