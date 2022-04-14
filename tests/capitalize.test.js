const capitalize = require('../src/capitalize')

test('make the first letter captialized', () => {
    expect(capitalize('bobert')).toBe('Bobert')
});

test('given a sentence only the first word\'s first letter is capitalized', () => {
    expect(capitalize('bobert has two left thumbs')).toBe('Bobert has two left thumbs')
});

test('return back string if first letter of the word is not a letter', () => {
    expect(capitalize('123bobert is a nerd')).toBe('123bobert is a nerd')
});