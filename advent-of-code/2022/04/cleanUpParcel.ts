// Part 1
import { getInput } from '../../getInput';

const data: string[] = getInput('data.txt', /\r?\n/);

const parcelCompareForFullyContain = () => {
  let counter = 0;
  data.forEach((pair) => {
    const parcelPair = pair.split(',');
    const first = parcelPair[0].split('-');
    const second = parcelPair[1].split('-');

    if (parseInt(first[0]) > parseInt(second[0])) {
      if (parseInt(first[1]) <= parseInt(second[1])) {
        counter++;
      }
    }
    if (parseInt(first[0]) <= parseInt(second[0])) {
      if (parseInt(first[1]) >= parseInt(second[1])) {
        counter++;
      }
    }
    if (parseInt(first[0]) === parseInt(second[0]) && parseInt(first[1]) === parseInt(second[1])) {
      counter--;
    }
  });
  return counter;
};

const countOverlap = () => {
  let counter = 0;
  data.forEach((pair) => {
    const parcelPair = pair.split(',');
    const first = parcelPair[0].split('-').map((string) => parseInt(string));
    const second = parcelPair[1].split('-').map((string) => parseInt(string));

    if (first[0] <= second[1]) {
      for (let i: number = first[0]; i <= first[1]; i++) {
        if (i >= second[0] && i <= second[1]) {
          counter++;
          break;
        }
      }
    } else if (second[0] <= first[1]) {
      for (let i: number = second[0]; i <= second[1]; i++) {
        if (i >= first[0] && i <= first[1]) {
          counter++;
          break;
        }
      }
    }
  });
  return counter;
};

console.log(countOverlap());
