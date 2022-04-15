const caesar = require("./caesar");

test("caesar shift by 1", () => {
  expect(caesar("abcde", 1)).toBe("bcdef");
});

test("with capitals numbers", () => {
  expect(caesar("ABCD", 1)).toBe("BCDE");
});

test("mix of upper and lower cases", () => {
  expect(caesar("aBC", 1)).toBe("bCD");
});
