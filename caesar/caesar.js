const caesarCipher = (str, shift) => {
  if (shift === 0) return str;

  // handle lower case letters
  let caesar = str.replace(/[a-z]/g, (char) => {
    return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
  });

  // handle upper case letters
  caesar = caesar.replace(/[A-Z]/g, (char) => {
    return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
  });

  return caesar;
};

module.exports = caesarCipher;
