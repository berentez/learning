import { getInput } from '../../getInput';
import { Digits } from './Digits';

const rawData: string[] = getInput('test.txt', /\r?\n/);
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

// console.log(uniqueNumberSearch(data));

//part 2
const signalBuilder = (data: string[][]) => {
  let res: number = 0;
  for (let i: number = 0; i < data.length; i++) {
    let digits: Digits = new Digits();

    //build up number data
    let splittedData = data[i][0]
      .split(' ')
      .sort((a, b) => a.length - b.length);
    splittedData.forEach((e: string, n: number) => {
      if (e.length === 2) {
        digits[1] = e;
      } else if (e.length === 3) {
        digits[7] = e;
      } else if (e.length === 4) {
        digits[4] = e;
      } else if (e.length === 5) {
        if (
          e.split('').includes(digits[1][0]) &&
          e.split('').includes(digits[1][1])
        ) {
          digits[3] = e;
          const nine = new Set(digits[3].split('').concat(digits[4].split('')));
          digits[9] = [...nine].join('');
        }
      } else if (e.length === 6 && e !== digits[9]) {
        digits[6] = e;
        splittedData.forEach((v: string) => {
          if (v.length === 5) {
            const five = new Set(digits[6].split('').concat(v.split('')));
            if (digits[6] === [...five].join('')) {
              digits[5] = v;
            } else {
              digits[2] = v;
            }
          }
        });
      } else if (e.length === 7) {
        digits[8] = e;
      }
    });
    console.log(digits);
    //get the four digit

    let digitData: string[] = data[i][1].split(' ');
    let digArray: string[] = [];
    console.log(digitData);

    digitData.forEach((digit: string) => {
      for (let n: number = 0; n < Object.keys(digits).length; n++) {
        if (
          Object.values(digits)[n].split('').sort().join('') ===
          digit.split('').sort().join('')
        ) {
          digArray.push(Object.keys(digits)[n]);
          console.log('dig: ', digArray);
        }
      }

      const digString: string = digArray.join('');
      res += parseInt(digString);
      console.log(res);
    });
  }
  return res;
};

console.log(signalBuilder(data));
