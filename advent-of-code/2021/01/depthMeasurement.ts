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
