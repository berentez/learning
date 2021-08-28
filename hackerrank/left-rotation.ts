/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a: number[], d: number): number[] {
  let res: number[] = new Array(a.length);
  a.forEach((num, i) => {
    const index: number = i - d;
    if (index < 0) {
      res[index + a.length] = num;
    }
    res[index] = num;
  });

  // Write your code here
  return res;
}

console.log(rotLeft([1, 2, 3, 4, 5], 2));
