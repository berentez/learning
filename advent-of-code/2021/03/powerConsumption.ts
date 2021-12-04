import { getInput } from '../../getInput';
import { transferBinary } from './transferBinaryToDecimal';
import { KeyInterface } from '../../KeyInterface';

const organiseData = (data: string[]): KeyInterface => {
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

interface Powers {
  gamma: string;
  epsilon: string;
}

const buildUpBinary = (obj: KeyInterface, length: number): Powers => {
  let gammaArr: string[] = [];
  let epsilonArr: string[] = [];
  let powers: Powers = { gamma: '', epsilon: '' };

  for (let i: number = 0; i < Object.keys(obj).length; i++) {
    let value: number = obj[i];
    if (value > length / 2) {
      gammaArr.push('1');
      epsilonArr.push('0');
    } else {
      gammaArr.push('0');
      epsilonArr.push('1');
    }
  }

  powers.gamma = gammaArr.join('');
  powers.epsilon = epsilonArr.join('');
  return powers;
};

const calculatePowerConsumption = (): number => {
  const data: string[] = getInput('input.txt', /\r?\n/);
  const dataObj = organiseData(data);
  const powers: Powers = buildUpBinary(dataObj, data.length);
  return transferBinary(powers.gamma) * transferBinary(powers.epsilon);
};

console.log(calculatePowerConsumption());
