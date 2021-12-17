import { getInput } from '../../getInput';

const rawData: string[] = getInput('input.txt', /\r?\n/);
const data: string[][] = rawData.map(v => v.split(' | '));

const uniqueNumberSearch = (data: string[][]): number => {
  let counter: number = 0;
  for (let i: number = 0; i < data.length; i++) {
    data[i][1].split(' ').forEach((e: string) => {
      if (e.length !== 5 && e.length !== 6) {
        counter++;
      }
    });
  }
  return counter;
};

console.log(uniqueNumberSearch(data));
