import { getInput } from '../../getInput';

const data: string[] = getInput('input.txt', ',');
const crabsPosition: number[] = data.map(value => parseInt(value));

const efficientFuelCost = (data: number[]) => {
  data.sort((a, b) => a - b);

  let fuel: number = Infinity;
  let position: number = 0;

  for (let i: number = 0; i < data.length; i++) {
    if (data[i] !== data[i + 1]) {
      let fuelEstimation: number = 0;
      for (let n: number = 0; n < data.length; n++) {
        fuelEstimation += Math.abs(data[n] - data[i]);
      }
      if (fuel > fuelEstimation) {
        fuel = fuelEstimation;
        position = data[i];
      }
    }
  }
  return fuel;
};

const findHighest = (data: number[]) => {
  let sort: number[] = data.sort((a, b) => a - b);

  let res: number[] = [sort[0], sort[sort.length - 1]];
  return res;
};

const calculateFuelCost = (data: number[]) => {
  let values: number[] = findHighest(data);
  let fuel: number = Infinity;
  let n: number = 0;

  for (let i: number = values[0]; i < values[1]; i++) {
    let currentFuel: number = 0;
    for (let j: number = 0; j < data.length; j++) {
      if (i < data[j]) {
        n = data[j] - i;
      } else {
        n = i - data[j];
      }
      let sum: number = (n * (n + 1)) / 2;
      currentFuel += sum;
    }
    if (fuel > currentFuel) {
      fuel = currentFuel;
    }
  }
  return fuel;
};

console.log(efficientFuelCost(crabsPosition));
console.log(calculateFuelCost(crabsPosition));
