const list: string[] = ['Alma', 'alma', 'B', 'Cica'];

const capitalLetterCounter = (list: string[]): number => {
  let res: number = 0;

  if (list) {
    for (let i: number = 0; i < list.length; i++) {
      if (list[i][0] === list[i][0].toUpperCase()) {
        res++;
      }
    }
  }
  return res;
};

console.log(capitalLetterCounter(list));
// console.log(capitalLetterCounter([]));
// console.log(capitalLetterCounter([null]));

const input: string = 'apa';

const isPolindrome = (word: string): boolean => {
  let array: string[] = [];

  for (let i: number = word.length - 1; i >= 0; i--) {
    array.push(word[i]);
  }

  return word === array.join('');
};

console.log(isPolindrome(input));
console.log(isPolindrome('kata'));
