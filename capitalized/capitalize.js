function capitalize(words) {
  return words[0] !== words[0].toUpperCase()
    ? words[0].toUpperCase() + words.slice(1)
    : words;
}

module.exports = capitalize;
