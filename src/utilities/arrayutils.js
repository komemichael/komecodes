export const sortArray = (array, sort_criteria) => {
    return array.sort((a, b) => (a[sort_criteria] > b[sort_criteria] ? 1 : -1));
};

export const sortByDate = (array, key, order) => {
    return array.sort((a, b) => {
        const x = new Date(a[key]).getTime();
        const y = new Date(b[key]).getTime();
        const val = order === 'desc' ? y - x : x - y;
        return val;
    });
};

export const sortByTitle = (array) => {
    return array.sort((a, b) => {
        const x = a['name'];
        const y = b['name'];
        const val = x.localeCompare(y, {
            sensitivity: 'base',
            numeric: 'true',
            caseFirst: 'upper',
        });
        return val;
    });
};

export const reorder = (array, startIndex, endIndex) => {
    const result = Array.from(array);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};