import { KeyInterface } from '../../KeyInterface';
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

const sumScratchCards = () => {
  let sum = 0;
  let cardCounter: KeyInterface = createCardInterface(cards);
  cards.forEach((card, index) => {
    const winningnums: string[] = transformInputToArray(card, 0);
    const ownedNums: string[] = transformInputToArray(card, 1);
    const matchedNums: string[] = ownedNums.filter((num) => winningnums.includes(num));
    const winnedCards = matchedNums.length;
    calculateCardGain(cardCounter, index, winnedCards);
  });
  sum = getCardNumber(Object.values(cardCounter));
  console.log(sum);
};

function getCardNumber(cards: number[]) {
  const sum = cards.reduce((a, b) => a + b);
  return sum;
}

function calculateCardGain(cardCounter: KeyInterface, index: number, winnedCards: number) {
  for (let n: number = 0; n < cardCounter[index]; n++) {
    for (let i: number = index + 1; i < winnedCards + 1 + index; i++) {
      if (cardCounter[i]) {
        cardCounter[i] += 1;
      }
    }
  }
}

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

function createCardInterface(cards: string[]) {
  let cardCounter: KeyInterface = {};
  cards.forEach((c, i) => (cardCounter[i] = 1));
  return cardCounter;
}

// console.log(sumWinningPoints());
console.log(sumScratchCards());
