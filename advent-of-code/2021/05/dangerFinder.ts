import { getInput } from '../../getInput';

const checkDirection = (data: number[][][]) => {
  data = data.filter(value => {
    return value[0][0] === value[1][0] || value[0][1] === value[1][1];
  });
  return data;
};

const findBiggest = (data: number[][][]) => {
  let res: number = 0;
  for (let i: number = 0; i < data.length; i++) {
    for (let n: number = 0; n < data[i].length; n++) {
      if (res < data[i][n][0]) {
        res = data[i][n][0];
      }
      if (res < data[i][n][1]) {
        res = data[i][n][1];
      }
    }
  }
  return res;
};

const markPath = (data: number[][][], palette: number[][]) => {
  for (let i: number = 0; i < data.length; i++) {
    if (data[i][0][0] > data[i][1][0] || data[i][0][1] > data[i][1][1]) {
      [data[i][0], data[i][1]] = [data[i][1], data[i][0]];
    }
    console.log(data);
    for (let y: number = data[i][0][1]; y <= data[i][1][1]; y++) {
      for (let x: number = data[i][0][0]; x <= data[i][1][0]; x++) {
        console.log(`y:${y}, x:${x}`);
        palette[y][x]++;
      }
    }
  }
  return palette;
};

const countDanger = (area: number[][]) => {
  let counter: number = 0;
  for (let i: number = 0; i < area.length; i++) {
    for (let n: number = 0; n < area[i].length; n++) {
      if (area[i][n] > 1) {
        counter++;
      }
    }
  }
  return counter;
};

const findDangerousArea = () => {
  const data: string[] = getInput('input.txt', /\r?\n/);
  let splittedData: number[][][] = data.map(value => {
    return value.split(' -> ').map(value => {
      return value.split(',').map(value => {
        return parseInt(value);
      });
    });
  });

  //filtering for horizontal, vertical lines
  splittedData = checkDirection(splittedData);

  //find biggest number for making the areaMatrix
  const highestNum: number = findBiggest(splittedData) + 1;
  let area: number[][] = [];
  for (let i: number = 0; i < highestNum; i++) {
    area.push(Array<number>(highestNum).fill(0));
  }
  area = markPath(splittedData, area);
  return countDanger(area);
};

console.log(findDangerousArea());
