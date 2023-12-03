import { getInput } from '../../getInput';

const engineSchematic: string[] = getInput('./engineSchematic.txt', /\r?\n/);

function createNumberArray() {
  let numbers: string[] = [];
  for (let i: number = 0; i < 10; i++) {
    numbers.push(i.toString());
  }
  return numbers;
}

const getSumOfEngineValues = () => {
  let sum: number = 0;
  let legitNums: number[] = [];
  const numbers = createNumberArray();
  // iterate lines
  for (let line = 0; line < engineSchematic.length; line++) {
    let numQuery: string = '';
    // iterate characters in lines
    for (let char = 0; char <= engineSchematic[line].length; char++) {
      if (numbers.includes(engineSchematic[line][char])) {
        numQuery = numQuery + engineSchematic[line][char];
      } else {
        if (numQuery === '') {
          continue;
        }

        console.log(numQuery);

        let firstIndex = char - numQuery.length;
        let lastIndex = char - 1;
        let numberLength = lastIndex - firstIndex + 1;
        // check up
        if (line !== 0) {
          for (let i: number = firstIndex - 1; i < firstIndex + numberLength + 1; i++) {
            if (numQuery === '') {
              break;
            }
            const char = engineSchematic[line - 1][i];
            if (char !== '.' && char !== undefined) {
              if (!numbers.includes(char)) {
                sum += parseInt(numQuery);
                legitNums.push(parseInt(numQuery));
                console.log(numQuery, 'UP');
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
            if (!numbers.includes(char)) {
              sum += parseInt(numQuery);
              legitNums.push(parseInt(numQuery));
              console.log(numQuery, 'LEFT');
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
            if (!numbers.includes(char)) {
              sum += parseInt(numQuery);
              legitNums.push(parseInt(numQuery));
              console.log(numQuery, 'RIGHT');
              numQuery = '';
            }
          }
        }

        if (numQuery === '') {
          continue;
        }

        // checking down
        if (line !== engineSchematic.length - 1) {
          for (let i: number = firstIndex - 1; i < firstIndex + numberLength + 1; i++) {
            if (numQuery === '') {
              break;
            }
            const char = engineSchematic[line + 1][i];
            if (char !== '.' && char !== undefined) {
              if (!numbers.includes(char)) {
                sum += parseInt(numQuery);
                legitNums.push(parseInt(numQuery));

                console.log(numQuery, 'DOWN');
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

  console.log(legitNums);
  console.log(sum);
};

console.log(getSumOfEngineValues());

// 532316 too high
// 531697 nope
// 528231 nope
