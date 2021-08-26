export function SeriesSum(n: number): string {
  let res: number = 0;
  let num: number = 1;

  for (let i: number = 0; i < n; i++) {
    res += 1 / num;
    num += 3;
  }

  return res.toFixed(2);
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));
