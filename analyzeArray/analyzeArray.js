const analyzeArr = (arr) => {
  const stats = {
      average: arr.reduce((acc, curr) => acc += curr, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
  }
  return stats;
};

export { analyzeArr };
