function greatestMatrix(input1, input2) {
  let res = [];

  for (let i = 0; i < input1.length; i++) {
    let part = [];
    for (let j = 0; j < input1[i].length; j++) {
      let x1 = input1[i][j];
      let x2 = input2[i][j];

      x1 > x2 ? part.push(x1) : part.push(x2);
    }
    res.push(part);
  }

  return res;
}

const input1 = [
  [2, 1],
  [0, 1],
];

const input2 = [
  [0, 3],
  [-1, 1],
];

const input3 = [
  [-1, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const input4 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(greatestMatrix(input1, input2));
console.log(greatestMatrix(input3, input4));
