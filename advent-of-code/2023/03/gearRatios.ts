import { getInput } from '../../getInput';

const engineSchematic: string[] = getInput('./engineSchematic.txt', /\r?\n/);

function createNumberAsciiArray() {
  let numberAscii: number[] = [];
  for (let i: number = 0; i < 10; i++) {
    numberAscii.push(toCharCode(i));
  }
  return numberAscii;
}

function toCharCode(value: number | string) {
  return value.toString().charCodeAt(0);
}

const getSumOfEngineValues = () => {
  let sum: number = 0;
  let legitNums: number[] = [];
  const numbers = createNumberAsciiArray();
  // iterate lines
  for (let line = 0; line < engineSchematic.length; line++) {
    let numQuery: string = '';
    // iterate characters in lines
    for (let char = 0; char < engineSchematic[line].length; char++) {
      if (numbers.includes(toCharCode(engineSchematic[line][char]))) {
        numQuery = numQuery + engineSchematic[line][char];
      } else {
        if (numQuery === '') {
          continue;
        }
        let firstIndex = char - numQuery.length;
        let lastIndex = char - 1;
        if (firstIndex !== 0) {
          // lets assume that - sign is part of the number
          if (numQuery === '949') {
            console.log();
          }
          if (engineSchematic[line][char - numQuery.length - 1] === '-') {
            numQuery = '-' + numQuery;
            console.log(numQuery);
            firstIndex -= 1;
          }
        }
        let numberLength = lastIndex - firstIndex + 1;

        // check up
        if (line !== 0) {
          for (let i: number = firstIndex - 1; i < firstIndex + numberLength + 2; i++) {
            if (numQuery === '') {
              break;
            }
            const char = engineSchematic[line - 1][i];
            if (char !== '.' && char !== undefined) {
              if (!numbers.includes(toCharCode(char))) {
                legitNums.push(parseInt(numQuery));
                numQuery = '';
              }
            }
          }
        }

        if (numQuery === '') {
          continue;
        }

        // check in line
        if (firstIndex !== 0) {
          const char = engineSchematic[line][firstIndex - 1];
          if (char !== '.' && char !== undefined) {
            if (!numbers.includes(toCharCode(char))) {
              legitNums.push(parseInt(numQuery));
              numQuery = '';
            }
          }
        }

        if (numQuery === '') {
          continue;
        }

        if (lastIndex !== engineSchematic[line].length - 1) {
          const char = engineSchematic[line][lastIndex + 1];
          if (char !== '.' && char !== undefined) {
            if (!numbers.includes(toCharCode(char))) {
              legitNums.push(parseInt(numQuery));
              numQuery = '';
            }
          }
        }

        if (numQuery === '') {
          continue;
        }

        // checking down
        if (line !== engineSchematic.length - 1) {
          for (let i: number = firstIndex - 1; i < firstIndex + numberLength + 2; i++) {
            if (numQuery === '') {
              break;
            }
            const char = engineSchematic[line + 1][i];
            if (char !== '.' && char !== undefined) {
              if (!numbers.includes(toCharCode(char))) {
                legitNums.push(parseInt(numQuery));
                numQuery = '';
              }
            }
          }
        }

        if (numQuery === '') {
          continue;
        }

        numQuery = '';
      }
    }
  }

  const res = legitNums.reduce((a, b) => a + b);
  console.log(res);
};

console.log(getSumOfEngineValues());

// 532316 too high
