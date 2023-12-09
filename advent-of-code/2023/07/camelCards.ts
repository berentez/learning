import { getInput } from '../../getInput';
import { KeyInterface } from '../../KeyInterface';

const CARD_TYPES: KeyInterface = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

type HANDTYPES = {
  highCard: any[];
  onePair: any[];
  twoPair: any[];
  threeOfAKind: any[];
  fullHouse: any[];
  fourOfAKind: any[];
  fiveOfAKind: any[];
};

let hand_types: HANDTYPES = {
  highCard: [] as any[],
  onePair: [] as any[],
  twoPair: [] as any[],
  threeOfAKind: [] as any[],
  fullHouse: [] as any[],
  fourOfAKind: [] as any[],
  fiveOfAKind: [] as any[],
};

const hands = getInput('./hands.txt', /\r?\n/);

const getTotalWinnings = (handsInput: string[]) => {
  const hands = handsInput.map((h: string) => h.split(' '));

  sortByHandTypes(hands);
};

function sortByHandTypes(hands: string[][]) {
  hands.forEach((h) => {
    const hand = h[0].split('');
    let sortTypes: KeyInterface = countCardTypes(hand);
    findHandType(h, sortTypes);
  });
  const keys = Object.keys(hand_types);
  const values = Object.values(hand_types);
  for (let i: number = 0; i < values.length; i++) {
    const sortedArr = quickSort(values[i]);
    const key: keyof HANDTYPES = keys[i] as keyof HANDTYPES;
    hand_types[key] = sortedArr;
  }
  const concattedArray: any[] = hand_types.highCard
    .concat(hand_types.onePair)
    .concat(hand_types.twoPair)
    .concat(hand_types.threeOfAKind)
    .concat(hand_types.fullHouse)
    .concat(hand_types.fourOfAKind)
    .concat(hand_types.fiveOfAKind);
  let res = 0;
  concattedArray.forEach((h: string[], i: number) => {
    res += parseInt(h[1]) * (i + 1);
  });
  console.log(res);
}

function countCardTypes(hand: string[]) {
  let sortTypes: KeyInterface = {};
  for (let i: number = 0; i < hand.length; i++) {
    if (sortTypes[hand[i]] > 0) {
      sortTypes[hand[i]]++;
    } else {
      sortTypes[hand[i]] = 1;
    }
  }
  return sortTypes;
}

function findHandType(handWithBid: string[], sortedHand: KeyInterface) {
  const cardTypes = Object.keys(sortedHand);
  const typeAmount = Object.values(sortedHand);
  if (typeAmount.includes(5)) {
    hand_types.fiveOfAKind.push(handWithBid);
  } else if (typeAmount.includes(4)) {
    hand_types.fourOfAKind.push(handWithBid);
  } else if (typeAmount.includes(3)) {
    if (typeAmount.includes(2)) {
      hand_types.fullHouse.push(handWithBid);
    } else {
      hand_types.threeOfAKind.push(handWithBid);
    }
  } else if (typeAmount.includes(2)) {
    if (cardTypes.length === 3) {
      hand_types.twoPair.push(handWithBid);
    } else {
      hand_types.onePair.push(handWithBid);
    }
  } else {
    hand_types.highCard.push(handWithBid);
  }
}

function quickSort(arr: any[][]): any {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr: string[][] = [];
  let rightArr: string[][] = [];

  for (let i = 1; i < arr.length; i++) {
    for (let indexOfHand = 0; indexOfHand < 5; indexOfHand++) {
      if (CARD_TYPES[arr[i][0][indexOfHand]] === CARD_TYPES[pivot[0][indexOfHand]]) {
        continue;
      } else if (CARD_TYPES[arr[i][0][indexOfHand]] < CARD_TYPES[pivot[0][indexOfHand]]) {
        leftArr.push(arr[i]);
        break;
      } else {
        rightArr.push(arr[i]);
        break;
      }
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(getTotalWinnings(hands));
