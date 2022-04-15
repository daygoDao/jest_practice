import { analyzeArr } from "./analyzeArray";

test("return green bb", () => {
  expect(analyzeArr([1, 2, 3])).toEqual({average: 2, min: 1, max: 3, length: 3});
});
