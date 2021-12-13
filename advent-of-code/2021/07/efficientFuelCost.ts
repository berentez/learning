import { getInput } from '../../getInput';

const efficientFuelCost = () => {
  const data: string[] = getInput('input.txt', ',');
  const crabsPosition: number[] = data.map(value => parseInt(value));

  crabsPosition.sort((a, b) => a - b);

  let fuel: number = Infinity;
  let position: number = 0;

  for (let i: number = 0; i < crabsPosition.length; i++) {
    if (crabsPosition[i] !== crabsPosition[i + 1]) {
      let fuelEstimation: number = 0;
      for (let n: number = 0; n < crabsPosition.length; n++) {
        fuelEstimation += Math.abs(crabsPosition[n] - crabsPosition[i]);
      }
      if (fuel > fuelEstimation) {
        fuel = fuelEstimation;
        position = crabsPosition[i];
      }
    }
  }
  return fuel;
};

console.log(efficientFuelCost());
