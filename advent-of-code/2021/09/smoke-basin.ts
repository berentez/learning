import { getInput } from '../../getInput';

const rawData: string[] = getInput('input.txt', /\r?\n/);
const data: number[][] = rawData.map(value =>
  value.split('').map(n => parseInt(n))
);

const borderData = (data: number[][]) => {
  let line: number[] = [];
  for (let i: number = 0; i < data[0].length + 2; i++) {
    line.push(9);
  }

  for (let i: number = 0; i < data.length; i++) {
    data[i].unshift(9);
    data[i].push(9);
  }
  data.unshift(line);
  data.push(line);
  return data;
};

const lowPointsRisk = (data: number[][]) => {
  borderData(data);
  let lowPoints: number[] = [];
  for (let i: number = 1; i < data.length; i++) {
    for (let n: number = 1; n < data[i].length; n++) {
      if (
        data[i][n] < data[i][n - 1] &&
        data[i][n] < data[i][n + 1] &&
        data[i][n] < data[i - 1][n] &&
        data[i][n] < data[i + 1][n]
      ) {
        lowPoints.push(data[i][n] + 1);
      }
    }
  }
  return lowPoints.reduce((a, b) => a + b);
};
console.log(lowPointsRisk(data));
