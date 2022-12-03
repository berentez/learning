import { getInput } from '../../getInput';

// Part 1

const rawData: string[] = getInput('input.txt', /\r?\n/);

const mostCaloryCarried = () => {
  let mostCal: number = 0;
  let calCarried: number = 0;

  rawData.forEach((cal) => {
    if (cal) {
      calCarried += parseInt(cal);
    } else {
      if (calCarried > mostCal) {
        mostCal = calCarried;
      }
      calCarried = 0;
    }
  });
  return mostCal;
};

// Part 2

const topThreeCaloryCarried = () => {
  let mostCal: number[] = [];
  let calCarried: number = 0;

  rawData.forEach((cal, i) => {
    if (cal) {
      calCarried += parseInt(cal);
    } else {
      if (mostCal.length < 3) {
        mostCal = mostCal.concat(calCarried);
      }
      if (calCarried > mostCal[2]) {
        mostCal[0] = calCarried;
      } else if (calCarried > mostCal[1]) {
        mostCal[0] = calCarried;
      } else if (calCarried > mostCal[0]) {
        mostCal[0] = calCarried;
      }
      mostCal = mostCal.sort((a, b) => a - b);
      calCarried = 0;
    }
  });
  return mostCal.reduce((a, b) => a + b);
};
