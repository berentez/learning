function wheatFromChaff(values) {
  for (let i = 0; i < values.length; i++) {
    let num = 0;
    if (values[i] > 0) {
      for (let n = i + 1; n < values.length; n++) {
        if (values[n] < 0) {
          num = n;
        }
      }
      if (num !== 0) {
        [values[i], values[num]] = [values[num], values[i]];
      }
    }
  }
  return values;
}

console.log(wheatFromChaff([2, -4, 6, -6])); //-6, -4, 6, 2
console.log(wheatFromChaff([7, -3, -10])); //-10, -3, 7
console.log(wheatFromChaff([7, -8, 1, -2])); // -2, -8, 1, 7
console.log(wheatFromChaff([16, 25, -48, -47, -37, 41, -2])); //-2, -37, -48, -47, 25, 41, 16
console.log(wheatFromChaff([-7, 10, -6, 8, 9])); //-7, -6, 10, 8, 9
console.log(wheatFromChaff([-2, -6, -4, 1, -8, 2]));
console.log(wheatFromChaff([-7, 10, -6, 8, 9]));
console.log(wheatFromChaff([-7, 10, -6, 8, 9]));
