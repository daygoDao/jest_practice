import {add, subtr} from './calculator'

test("add 1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("add 2 - 2 = 0", () => {
  expect(subtr(2, 2)).toBe(0);
});
