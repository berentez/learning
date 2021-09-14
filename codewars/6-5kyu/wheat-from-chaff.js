function wheatFromChaff(values) {
  let negative = [];
  let positive = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] < 0 && i < values.length / 2) {
      negative.push(values[i]);
    } else if (values[i] < 0 && i > values.length / 2) {
      negative.unshift(values[i]);
    } else if (values[i] > 0 && i < values.length / 2) {
      positive.push(values[i]);
    } else {
      positive.unshift(values[i]);
    }
  }

  return negative.concat(positive);
}

console.log(wheatFromChaff([2, -4, 6, -6]));
console.log(wheatFromChaff([7, -3, -10]));
console.log(wheatFromChaff([7, -8, 1, -2]));
console.log(wheatFromChaff([16, 25, -48, -47, -37, 41, -2]));
console.log(wheatFromChaff([-7, 10, -6, 8, 9]));
console.log(wheatFromChaff([-2, -6, -4, 1, -8, 2]));
