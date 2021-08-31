/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s: number[], d: number, m: number): number {
  let res: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    let num: number = s[i];
    for (let j: number = 1; j < m; j++) {
      num += s[i + j];
    }
    if (num === d) {
      res++;
    }
  }

  return res;
}

// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
// console.log(birthday([4], 4, 1));
console.log(
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);

console.log(
  birthday(
    [
      2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5,
      3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3,
      1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1,
      5, 3, 3, 3, 4, 5, 2,
    ],
    26,
    8
  )
);
