function shiftedDiff(first, second) {
  const firstLetterIndex = first.indexOf(second[0]);

  if (first.length !== second.length) return -1;
  if (firstLetterIndex === -1) return -1;
  if (first === second) return 0;

  if (checkLettersOrder(first, second)) {
    return first.length - firstLetterIndex;
  }

  return -1;
}

function checkLettersOrder(first, second) {
  let shiftedWordArr = first.split(second[0]);
  [shiftedWordArr[0], shiftedWordArr[1]] = [
    shiftedWordArr[1],
    shiftedWordArr[0],
  ];
  shiftedWordArr.unshift(second[0]);

  const shiftedWord = shiftedWordArr.join('');
  return shiftedWord === second;
}

//test

console.log(shiftedDiff('eecoff', 'coffee')); //4
console.log(shiftedDiff('Moose', 'moose')); //-1
console.log(shiftedDiff("isn't", "'tisn")); //2
console.log(shiftedDiff('Esham', 'Esham')); //0
console.log(shiftedDiff(' ', ' ')); //0
console.log(shiftedDiff('hoop', 'pooh')); //-1
console.log(shiftedDiff('  ', ' ')); //-1
