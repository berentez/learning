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

// console.log(getSumOfEngineValues());

// Part2

const findWrongGearsSum = () => {
  let sum: number = 0;

  const STAR = '*';
  const NUMS = createNumberArray();

  for (let line = 0; line < engineSchematic.length; line++) {
    for (let char = 0; char <= engineSchematic[line].length; char++) {
      if (engineSchematic[line][char] === STAR) {
        let adjacentNums: number[] = [];
        // CHECK TOP
        if (line !== 0) {
          // assuming there is no value above 1000
          let numQuery = '';
          for (let i: number = 0; i <= engineSchematic[line].length; i++) {
            if (NUMS.includes(engineSchematic[line - 1][i])) {
              numQuery += engineSchematic[line - 1][i];
            } else {
              if (numQuery) {
                if (i - 1 >= char - 1 && i - 1 - numQuery.length < char + 1) {
                  adjacentNums.push(parseInt(numQuery));
                  numQuery = '';
                } else {
                  numQuery = '';
                }
              }
            }
          }
        }

        // CHECK BOTTOM
        if (line !== engineSchematic.length - 1) {
          let numQuery = '';
          for (let i: number = 0; i <= engineSchematic[line].length; i++) {
            if (NUMS.includes(engineSchematic[line + 1][i])) {
              numQuery += engineSchematic[line + 1][i];
            } else {
              if (numQuery) {
                if (i - 1 >= char - 1 && i - 1 - numQuery.length < char + 1) {
                  adjacentNums.push(parseInt(numQuery));
                  numQuery = '';
                } else {
                  numQuery = '';
                }
              }
            }
          }
        }

        // // CHECK RIGHT
        if (char !== engineSchematic[line].length - 1) {
          let numQuery = '';
          for (let i: number = char + 1; i < char + 5; i++) {
            if (NUMS.includes(engineSchematic[line][i])) {
              numQuery += engineSchematic[line][i];
            } else {
              if (numQuery) {
                adjacentNums.push(parseInt(numQuery));
                numQuery = '';
                break;
              } else {
                numQuery = '';
                break;
              }
            }
          }
        }

        // // CHECK LEFT
        if (char !== 0) {
          let numQuery = '';
          for (let i: number = char - 1; i > char - 5; i--) {
            if (NUMS.includes(engineSchematic[line][i])) {
              numQuery = engineSchematic[line][i] + numQuery;
            } else {
              if (numQuery) {
                adjacentNums.push(parseInt(numQuery));
                numQuery = '';
                break;
              } else {
                numQuery = '';
                break;
              }
            }
          }
        }

        if (adjacentNums.length === 2) {
          console.log(adjacentNums);
          sum += adjacentNums[0] * adjacentNums[1];
        }
      }
    }
  }
  console.log(sum);
};

console.log(findWrongGearsSum());

//76462107 low
//76539269 low
