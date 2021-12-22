import { getInput } from '../../getInput';

const rawData: string[] = getInput('testInput.txt', /\r?\n/);
const data: number[][] = rawData.map(value =>
  value.split('').map(n => parseInt(n))
);

const lowPoints = (data: string[]) => {
  for (let i: number = 0; i < data.length; i++) {}
};
console.log(lowPoints);
