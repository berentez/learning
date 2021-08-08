function hourglassSum(arr: number[][]): number {
  const hourglassSums: number[] = [];
  for (let i: number = 0; i < 5; i++) {
    for (let n: number = 0; n < 5; n++) {
      let sum: number =
        arr[i][i + n] +
        arr[i][i + n + 1] +
        arr[i][i + n + 2] +
        arr[i + 1][i + n + 1] +
        arr[i + 2][i + n] +
        arr[i + 2][i + n + 1] +
        arr[i + 2][i + n + 2];
      hourglassSums.push(sum);
      console.log(hourglassSums);
    }
  }
  return;
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
