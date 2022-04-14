const reverseString = (str) => {
  return str == undefined
    ? "invalid input"
    : String(str).split("").reverse().join("");
};

module.exports = reverseString;
