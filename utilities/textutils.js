export const stringtoCode = (name) => {
    if (name.split(' ').length === 1)
        return name.substring(0, 2).toUpperCase();

    const names = name.split(' ');
    return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
}

export const truncateString = (str, length) => {
    if (str.length <= length) {
        return str;
    }
    const subString = str.substr(0, length);
    return subString.substr(0, subString.lastIndexOf(' ')) + '…';
};

export const truncateNumber = (number, places = 1) => {
    const truncated =
        number > 999 ? (number / 1000).toFixed(places) + 'k' : number;
    const lastDigit = truncated.toString().slice(-2);

    if (lastDigit === '0k' && places === 1) {
        return truncated.toString().slice(0, -3) + 'k';
    } else {
        return truncated;
    }
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const generateRandInt = () => Math.random() * 1000;

export const createUUID = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const isAlphaNumeric = (inputtext) => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    return inputtext.match(letterNumber);
}

export const isAlphabet = (alphabet) => {
    return alphabet.match(/^[a-zA-Z\s]*$/i);
}