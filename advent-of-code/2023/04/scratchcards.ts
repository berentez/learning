import { getInput } from '../../getInput';

const input: string[] = getInput('./cards.txt', /\r?\n/);
const cards: string[] = input.flatMap((card) => card.split(':')[1]);

const sumWinningPoints = () => {
  let sum = 0;
  cards.forEach((card) => {
    const winningnums: string[] = transformInputToArray(card, 0);
    const ownedNums: string[] = transformInputToArray(card, 1);
    const matchedNums: string[] = ownedNums.filter((num) => winningnums.includes(num));
    const points = calculatePoints(matchedNums.length);
    sum += points;
  });
  console.log(sum);
};

function transformInputToArray(card: string, index: number) {
  const newCard = card
    .split('|')
    [index].split(' ')
    .filter((num: string) => num !== '');
  return newCard;
}

function calculatePoints(matches: number) {
  if (!matches) {
    return 0;
  } else {
    if (matches === 1) {
      return 1;
    } else {
      let point = 1;
      for (let i = 1; i < matches; i++) {
        point *= 2;
      }
      return point;
    }
  }
}

console.log(sumWinningPoints());
