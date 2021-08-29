/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1: string, s2: string): string {
  const aArr: string[] = s1.split('').sort();
  const bArr: string[] = s2.split('').sort();
  const intersection = aArr.filter(x => bArr.includes(x));

  if (intersection.length > 0) {
    return 'YES';
  }
  return 'NO';
}

console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
