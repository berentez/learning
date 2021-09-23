function rotateMatrix(input) {
  let res = [];

  for (let i = 0; i < input.length; i++) {
    let part = [];
    for (let j = input[i].length - 1; j >= 0; j--) {
      part.push(input[j][i]);
    }
    res.push(part);
  }

  return res;
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(input));
