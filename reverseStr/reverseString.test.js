const reverseString = require("./reverseString");

test("reverse the given sentence", () => {
  expect(reverseString("bobert is a no good pirate")).toBe(
    "etarip doog on a si trebob"
  );
});

test("reverse numbers too", () => {
  expect(reverseString(12345)).toBe("54321");
});

test('if given null input return string alerting "invalid input"', () => {
  expect(reverseString(undefined)).toBe("invalid input");
});
