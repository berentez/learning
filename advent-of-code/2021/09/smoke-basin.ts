import { getInput } from '../../getInput';

const rawData: string[] = getInput('test.txt', /\r?\n/);
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
// console.log(lowPointsRisk(data));

const lowAreaCounter = (data: number[][]) => {
  borderData(data);
  let areas: number[] = [];
  for (let i: number = 1; i < data.length; i++) {
    let counter: number = 0;
    for (let n: number = 1; n < data[i].length; n++) {
      if (data[i][n] !== 9) {
        counter++;
        areaDetector(data, i, n, counter);
        data[i][n] = 9;
      }
      areas.push(counter);
    }
  }
  console.log(areas);
};

const areaDetector = (
  data: number[][],
  i: number,
  n: number,
  counter: number
): any => {
  if (data[i][n] === 9) {
    return counter;
  } else if (data[i][n + 1] !== 9) {
    data[i][n] = 9;
    data[i][n + 1] = 9;
    counter++;
    return areaDetector(data, i, n + 1, counter);
  } else if (data[i + 1][n] !== 9) {
    data[i][n] = 9;
    data[i + 1][n] = 9;
    counter++;
    return areaDetector(data, i + 1, n, counter);
  } else if (data[i][n - 1] !== 9) {
    data[i][n] = 9;
    data[i][n - 1] = 9;
    counter++;
    return areaDetector(data, i, n - 1, counter);
  } else if (data[i - 1][n] !== 9) {
    data[i][n] = 9;
    data[i - 1][n] = 9;
    counter++;
    return areaDetector(data, i - 1, n, counter);
  }
};

console.log(lowAreaCounter(data));
