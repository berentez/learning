import { getInput } from '../../getInput';

const data: string[] = getInput('input.txt', /\r?\n/);

// Part 1

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
  return characterValueCounter(resArray);
}

function characterValueCounter(characterArray: string[]) {
  let res: number = 0;

  characterArray.forEach((item) => {
    let value = item.charCodeAt(0);
    if (value > 96 && value < 124) {
      res += value - 96;
    } else if (value > 64 && value < 92) {
      res += value - 38;
    }
  });

  return res;
}

// Part 2

function getSharedBadge() {
  let resArray: string[] = [];
  for (let i: number = 0; i < data.length; i += 3) {
    const comparingArray: string[] = data[i].split('');
    for (let n: number = 0; n < comparingArray.length; n++) {
      const indexOfBadgeInSecond = data[i + 1].split('').indexOf(comparingArray[n]);
      if (indexOfBadgeInSecond > -1) {
        if (data[i + 2].split('').includes(comparingArray[n])) {
          resArray.push(comparingArray[n]);
          break;
        }
      }
    }
  }
  return characterValueCounter(resArray);
}

console.log(getSharedBadge());

// 3572 is too high
