import { getInput } from '../../getInput';
import { transferBinary } from './transferBinaryToDecimal';
import { KeyInterface } from '../../KeyInterface';

const oxygenGenerator = (data: string[]): number => {
  for (let i: number = 0; i < data[0].length; i++) {
    let one: number = 0;
    let zero: number = 0;
    for (let n: number = 0; n < data.length; n++) {
      if (data[n][i] === '1') {
        one++;
      } else {
        zero++;
      }
    }
    if (one >= zero) {
      data = data.filter(value => value[i] === '1');
    } else {
      data = data.filter(value => value[i] === '0');
    }
    if (data.length === 1) {
      return transferBinary(data.join(''));
    }
  }
  return transferBinary(data.join(''));
};

const co2Scrubber = (data: string[]): number => {
  for (let i: number = 0; i < data[0].length; i++) {
    let one: number = 0;
    let zero: number = 0;
    for (let n: number = 0; n < data.length; n++) {
      if (data[n][i] === '1') {
        one++;
      } else {
        zero++;
      }
    }
    if (one < zero) {
      data = data.filter(value => value[i] === '1');
    } else {
      data = data.filter(value => value[i] === '0');
    }
    if (data.length === 1) {
      return transferBinary(data.join(''));
    }
  }
  return transferBinary(data.join(''));
};

const lifeSupportRatings = (): number => {
  let data: string[] = getInput('input.txt', /\r?\n/);
  const oxygen: number = oxygenGenerator(data);
  const co2: number = co2Scrubber(data);

  return oxygen * co2;
};

console.log(lifeSupportRatings());
