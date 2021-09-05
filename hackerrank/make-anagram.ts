/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a: string, b: string): number {
  const aArr: string[] = a.split('').sort();
  const bArr: string[] = b.split('').sort();
  let counter: number = 0;
  let index: number = 0;

  for (let i: number = 0; i < aArr.length; i++) {
    for (let j: number = index; j < bArr.length; j++) {
      if (aArr[i] === bArr[j]) {
        counter++;
        index = j + 1;
        break;
      }
    }
  }

  return aArr.length - counter + bArr.length - counter;
}

console.log(makeAnagram('abc', 'agh'));
console.log(
  makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
);
