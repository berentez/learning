import { getInput } from '../../getInput';

const testDays: number = 18;
const days: number = 80;

const fishCounter = (days: number) => {
  const data: string[] = getInput('input.txt', ',');
  const fishData: number[] = data.map(value => parseInt(value));
  let res: number = fishData.length;

  for (let i: number = 0; i < days; i++) {
    for (let n: number = 0; n < fishData.length; n++) {
      if (fishData[n] === 0) {
        fishData[n] = 7;
        fishData.push(9);
        res++;
      }
      fishData[n]--;
    }
  }
  return res;
};

// console.log(fishCounter(testDays));
console.log(fishCounter(days));
