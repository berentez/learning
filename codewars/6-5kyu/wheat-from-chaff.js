function wheatFromChaff(values) {
  let halfLength = 0;
  if (values.length % 2 === 0) {
    halfLength = values.length / 2;
  } else {
    halfLength = (values.length + 1) / 2;
  }

  for (let i = 0; i < halfLength; i++) {
    if (values[i] > 0) {
      for (let j = values.length - 1; j >= 0; j--) {
        console.log(i, j);
        if (values[j] < 0) {
          [values[i], values[j]] = [values[j], values[i]];
          break;
        }
      }
    }
  }

  return values;
}

// console.log(wheatFromChaff([2, -4, 6, -6]));
// console.log(wheatFromChaff([7, -3, -10]));
// console.log(wheatFromChaff([7, -8, 1, -2]));
// console.log(wheatFromChaff([16, 25, -48, -47, -37, 41, -2]));
console.log(wheatFromChaff([-7, 10, -6, 8, 9]));
console.log(wheatFromChaff([-2, -6, -4, 1, -8, 2]));
