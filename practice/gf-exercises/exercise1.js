function newArray(arr, n) {
  let maxValue = 0;

  for (let i of arr) {
    if (i > maxValue) {
      maxValue = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % n === 0) {
      arr[i] = arr[i] * maxValue;
    }
  }

  return arr;
}

console.log(newArray([0, 1, 2, 3, 1], 2));
console.log(newArray([0, 1, 5, 4], 3));
console.log(newArray([0, 3, 5, 4, 3, 6], 2));
