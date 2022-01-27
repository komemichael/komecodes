export const clipBoardSelect = (ref) => {
    const input = ref.current;
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

export const clipBoardCopy = () => {
    try {
        document.execCommand('copy');
    } catch (error) {
        console.log(err)
    }
}