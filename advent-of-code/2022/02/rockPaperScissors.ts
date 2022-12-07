import { getInput } from '../../getInput';
const rawData: string[] = getInput('input.txt', /\r?\n/);

// Part 1

// 1 - 2 = -1  WIN
// 1 - 3 = -2  LOSE
// 2 - 1 = 1  LOSE
// 2 - 3 = -1  WIN
// 3 - 1 = 2  WIN
// 3 - 2 = 1  LOSE

const transformToPoint = (value: string) => {
  if (value === 'A' || value === 'X') {
    return 1;
  } else if (value === 'B' || value === 'Y') {
    return 2;
  } else {
    return 3;
  }
};

const maxPoints = () => {
  let points = 0;
  rawData.forEach((round) => {
    let opp = transformToPoint(round[0]);
    let me = transformToPoint(round[2]);
    points += me;
    if (opp - me === 2 || opp - me === -1) {
      points += 6;
    } else if (opp - me === 0) {
      points += 3;
    }
  });
  return points;
};

// Part2

// X = Lose
// Y = Draw
// Z = Win

const pointArray = [3, 1, 2, 3, 1];

const getMyValue = (opp: number, result: string) => {
  let index: number = -1;
  if (result === 'Y') {
    return opp;
  } else if (result === 'X') {
    if (opp === 3) {
      index = pointArray.indexOf(opp, 2);
    } else {
      index = pointArray.indexOf(opp);
    }
    return pointArray[index - 1];
  } else {
    if (opp === 3) {
      index = pointArray.indexOf(opp, 2);
    } else {
      index = pointArray.indexOf(opp);
    }
    return pointArray[index + 1];
  }
};

const maxPointsWithXYZ = () => {
  let points = 0;
  rawData.forEach((round) => {
    let opp = transformToPoint(round[0]);
    let me = getMyValue(opp, round[2]);
    points += me;
    if (opp - me === 2 || opp - me === -1) {
      points += 6;
    } else if (opp - me === 0) {
      points += 3;
    }
  });
  return points;
};

console.log(maxPointsWithXYZ());
