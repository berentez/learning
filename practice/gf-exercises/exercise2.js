function uniqueNumber(input) {
  let res = [];
  let res2 = [];
  let numbers = {};

  for (let i of input) {
    res = res.concat(i);
  }

  for (let i = 0; i < res.length; i++) {
    if (!numbers[res[i]]) {
      numbers[res[i]] = 1;
      res2.push(res[i]);
    }
  }

  return res2;
}

const input1 = [
  [1, 1],
  [4, 2],
];

const input2 = [
  [4, 3, -1],
  [10, 2, 5],
  [-2, 3, 4],
];

console.log(uniqueNumber(input1));
console.log(uniqueNumber(input2));
