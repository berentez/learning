function sumArray(array) {
  if (array) {
    if (array.length > 1) {
      const highestLowest = Math.max(...array) + Math.min(...array);
      return array.reduce((a, b) => a + b) - highestLowest;
    }
  }
  return 0;
}

console.log(sumArray([6, 0, 1, 10, 10]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([6]));
