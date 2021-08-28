/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s: string): number {
  let res: number = 0;

  const sArr: string[] = s.split('');
  for (let i: number = 0; i < sArr.length; i++) {
    if (sArr[i] === sArr[i + 1]) {
      res++;
    }
  }

  return res;
}

console.log(alternatingCharacters('AAAA'));
console.log(alternatingCharacters('BBBBB'));
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA'));
console.log(alternatingCharacters('AAABBB'));
