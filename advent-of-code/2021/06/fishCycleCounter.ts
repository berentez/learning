import { getInput } from '../../getInput';

const testDays: number = 18;
const days: number = 80;
const daysTwo: number = 256;

const counter = (input: number[]) => {
  let cycleArray: number[] = new Array(9).fill(0);

  for (let i: number = 0; i < input.length; i++) {
    cycleArray[input[i]]++;
  }
  return cycleArray;
};

const fishCounter = (days: number) => {
  const data: string[] = getInput('input.txt', ',');
  const fishData: number[] = data.map(value => parseInt(value));
  let cycle: number[] = counter(fishData);

  for (let i: number = 0; i < days; i++) {
    let newCycle: number[] = new Array(9).fill(0);
    for (let n: number = 0; n < cycle.length; n++) {
      if (n === 8) {
        newCycle[n] = cycle[0];
      } else if (n === 6) {
        newCycle[n] = cycle[0] + cycle[n + 1];
      } else {
        newCycle[n] = cycle[n + 1];
      }
    }
    cycle = newCycle;
  }

  const res = cycle.reduce((a, b) => a + b);

  return res;
};

console.log(fishCounter(daysTwo));
