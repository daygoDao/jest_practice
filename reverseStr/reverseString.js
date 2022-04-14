const reverseString = (str) => {
    const reversed = (String(str).split('').reverse().join(''));
    return reversed
}

module.exports = reverseString;