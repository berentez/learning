import { getInput } from '../../getInput';

const data: string[] = getInput('input.txt', /\r?\n/);

function getSharedItem() {
  let resArray: string[] = [];
  data.forEach((rucksack) => {
    let first = rucksack.substring(0, rucksack.length / 2).split('');
    let second = rucksack.substring(rucksack.length / 2, rucksack.length).split('');

    for (let i: number = 0; i < rucksack.length / 2; i++) {
      if (second.includes(first[i])) {
        resArray.push(first[i]);
        break;
      }
    }
    // }
  });
  let res: number = 0;

  resArray.forEach((item) => {
    let value = item.charCodeAt(0);
    if (value > 96 && value < 124) {
      res += value - 96;
    } else if (value > 64 && value < 92) {
      res += value - 38;
    }
  });

  return res;
}

console.log(getSharedItem());
