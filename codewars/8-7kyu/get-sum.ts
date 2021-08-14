export function getSum(a: number, b: number): number {
  const difference = (): number[] => {
    if (a >= b) {
      return [b, a];
    }
    return [a, b];
  };
  const lower: number = difference()[0];
  const higher: number = difference()[1];

  let result = lower;

  for (let i: number = lower + 1; i <= higher; i++) {
    result = result + i;
  }
  return result;
}

console.log(getSum(-1, 2));
console.log(getSum(-5, 2));
