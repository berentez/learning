const fs = require('fs');

//part-1
function countDepthIncrease(): number {
  let text: string = readFile('depths.txt');
  let textArray: string[] = text.split(/\r?\n/);
  let increase: number = 0;

  for (let i: number = 0; i < textArray.length; i++) {
    if (parseInt(textArray[i + 1]) > parseInt(textArray[i])) {
      increase++;
    }
  }
  return increase;
}

function readFile(content: string): string {
  const text: string = fs.readFileSync(content, 'utf-8');
  return text;
}

console.log(countDepthIncrease());

//part2

function countDepthSumIncrease(): number {
  let text: string = readFile('depths.txt');
  let textArray: string[] = text.split(/\r?\n/);
  let increase: number = 0;

  const numArr: number[] = textArray.map(value => {
    return parseInt(value);
  });

  for (let i: number = 0; i < numArr.length - 3; i++) {
    const sum1: number = numArr[i] + numArr[i + 1] + numArr[i + 2];
    const sum2: number = numArr[i + 1] + numArr[i + 2] + numArr[i + 3];

    if (sum1 < sum2) {
      increase++;
    }
  }
  return increase;
}

console.log(countDepthSumIncrease());
