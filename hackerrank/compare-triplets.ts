/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a: number[], b: number[]): number[] {
  let res: number[] = [0, 0];
  for (let i: number = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      res[0]++;
    } else if (a[i] < b[i]) {
      res[1]++;
    }
  }
  return res;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
