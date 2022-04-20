const add = (a, b) => {
  return a + b;
};

const subtr = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return b !== 0 ? a / b : "cant divide by zero";
};

const mod = (a, b) => {
  return a % b;
};

export { add, subtr, mult, div, mod };
