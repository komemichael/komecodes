export const getName = (name) => {
    if (name.split(' ').length === 1)
        return name.substring(0, 2).toUpperCase();

    const names = name.split(' ');
    return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
}

export const stringToColour = (str) => {
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (let i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}