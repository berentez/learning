function hourglassSum(arr: number[][]): number {
  const hourglassSums: number[] = [];
  for (let i: number = 0; i < 4; i++) {
    for (let n: number = 0; n < 4; n++) {
      let num: number =
        arr[i][n] +
        arr[i][n + 1] +
        arr[i][n + 2] +
        arr[i + 1][n + 1] +
        arr[i + 2][n] +
        arr[i + 2][n + 1] +
        arr[i + 2][n + 2];
      hourglassSums.push(num);
    }
  }

  return hourglassSums.sort((a, b) => b - a)[0];
}

////////////////////////////

const input: number[][] = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(input));
