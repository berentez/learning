import { getInput } from '../../getInput';
import { KeyInterface } from '../../KeyInterface';

const organiseData = (data: string[]): Object => {
  let dataObj: KeyInterface = {};

  for (let i: number = 0; i < data.length; i++) {
    for (let n: number = 0; n < data[i].length; n++) {
      if (!dataObj[n]) {
        dataObj[n] = 0;
      }
      if (data[i][n] === '1') {
        dataObj[n]++;
      }
    }
  }
  return dataObj;
};

const transferBinary = (binary: string): number => {
  let res: number = 0;
  let index = 0;

  for (let i: number = binary.length - 1; i >= 0; i--) {
    res += parseInt(binary[i]) * 2 ** index;
    index++;
  }

  return res;
};

const calculatePowerConsumption = (): number => {
  const data = getInput('input.txt', /\r?\n/);
  const dataObj = organiseData(data);
  console.log(dataObj);
  //getting the two number
  //transfering to decimal and calculate power
  return 0;
};

console.log(calculatePowerConsumption());
