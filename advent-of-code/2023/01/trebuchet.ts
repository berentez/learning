import { getInput } from '../../getInput';

const spelledOut = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const calibrations: string[] = getInput('./calibration.txt', /\r?\n/);

const recoverCalibrations = () => {
  getTwoDigitCalibrations();
};

const getTwoDigitCalibrations = () => {
  const alteredCalibrations = findSpelledOutNumbers();

  calibrations.forEach((cal: string) => getEveryDigits(cal));

  const twoDigits = alteredCalibrations
    .map((cal: string) => getDigits(cal.split('')))
    .flatMap((cal: string[]) => `${cal[0]}${cal[cal.length - 1]}`)
    .map((str: string) => parseInt(str));

  const sum = sumOfTwoDigits(twoDigits);
};

function getDigits(cal: string[]) {
  const digits = cal.filter((c) => parseInt(c));
  return digits;
}

function getEveryDigits(cal: string) {
  for (let num of spelledOut) {
    cal.split(num);
    console.log(cal.split(num));
  }
}

function sumOfTwoDigits(twoDigits: number[]) {
  const res: number = twoDigits.reduce((a: number, b: number) => a + b);
  return res;
}

const findSpelledOutNumbers = () => {
  let copyCalib = [...calibrations];
  for (let i = 0; i < spelledOut.length; i++) {
    const splitted: string[][] = copyCalib.map((cal: string) => {
      return cal.split(spelledOut[i]);
    });

    for (let n = 0; n < splitted.length; n++) {
      if (splitted[n].length > 1) {
        splitted.splice(n, 1, [splitted[n].join(`${spelledOut[i]}${i + 1}${spelledOut[i]}`)]);
      }
    }
    copyCalib = splitted.flat();
  }
  return copyCalib;
};

console.log(recoverCalibrations());
