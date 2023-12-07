import { getInput } from '../../getInput';

const input = getInput('./bestScore.txt', /\r?\n/);

// input for part1
const times = input[0]
  .split(':')[1]
  .split(' ')
  .map((str: string) => parseInt(str))
  .filter((num: number) => num);

const distanceRecords = input[1]
  .split(':')[1]
  .split(' ')
  .map((str: string) => parseInt(str))
  .filter((num: number) => num);

// input for part2
const time = parseInt(input[0].split(':')[1].split(' ').join(''));
const distanceRecord = parseInt(input[1].split(':')[1].split(' ').join(''));

const getRecorBeatingStrategyNumber = (times: number[], distanceRecords: number[]) => {
  let res: number = 1;
  for (let i: number = 0; i < times.length; i++) {
    let strategyCounter: number = 0;
    for (let n: number = 1; n < times[i]; n++) {
      const speed = n;
      const remainingTime = times[i] - n;
      const distance = speed * remainingTime;
      if (distance > distanceRecords[i]) {
        strategyCounter++;
      }
    }
    res *= strategyCounter;
  }
  console.log(res);
};

const getRecorBeatingStrategyNumberTWO = (time: number, record: number) => {
  let strategyCounter: number = 0;
  for (let i: number = 1; i < time; i++) {
    const speed = i;
    const remainingTime = time - i;
    const distance = speed * remainingTime;
    if (distance > record) {
      strategyCounter++;
    }
  }
  console.log(strategyCounter);
};

// console.log(getRecorBeatingStrategyNumber(times, distanceRecords));
console.log(getRecorBeatingStrategyNumberTWO(time, distanceRecord));
