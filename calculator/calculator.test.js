import { add, subtr, mult, div, mod } from "./calculator";

test("add 1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 2 - 2 = 0", () => {
  expect(subtr(2, 2)).toBe(0);
});

test("multiply 2 * 2 = 4", () => {
  expect(mult(2, 2)).toBe(4);
});

test("divide 21 / 7 = 3", () => {
  expect(div(21, 7)).toBe(3);
});

test("module 4 % 2 = 0", () => {
  expect(mod(4, 2)).toBe(0);
});
