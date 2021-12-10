import { getInput } from '../../getInput';

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
  for (let line of data) {
    //if data is not diagonal
    if (line[0][0] === line[1][0] || line[0][1] === line[1][1]) {
      if (line[0][0] > line[1][0] || line[0][1] > line[1][1]) {
        [line[0], line[1]] = [line[1], line[0]];
      }

      for (let y: number = line[0][1]; y <= line[1][1]; y++) {
        for (let x: number = line[0][0]; x <= line[1][0]; x++) {
          palette[y][x]++;
        }
      }
    } else {
      let y: number = line[0][1];
      let x: number = line[0][0];
      for (let i: number = 0; i <= Math.abs(line[0][0] - line[1][0]); i++) {
        palette[y][x]++;
        if (y > line[1][1]) {
          y--;
        } else {
          y++;
        }
        if (x > line[1][0]) {
          x--;
        } else {
          x++;
        }
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

const findDangerousAreaWithDiagonal = () => {
  const data: string[] = getInput('input.txt', /\r?\n/);
  let splittedData: number[][][] = data.map(value => {
    return value.split(' -> ').map(value => {
      return value.split(',').map(value => {
        return parseInt(value);
      });
    });
  });

  //find biggest number for making the areaMatrix
  const highestNum: number = findBiggest(splittedData) + 1;
  let area: number[][] = [];
  for (let i: number = 0; i < highestNum; i++) {
    area.push(Array<number>(highestNum).fill(0));
  }
  area = markPath(splittedData, area);
  return countDanger(area);
};

console.log(findDangerousAreaWithDiagonal());
