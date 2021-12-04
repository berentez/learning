import { getInput } from '../../getInput';

const calculatePowerConsumption = (): number => {
  const data = getInput('input.txt', /\r?\n/);
  //building up object
  //getting the two number
  //transfering to decimal and calculate power
  return 0;
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
