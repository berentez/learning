export function lastChair(n: number): number {
  let chairs: number[] = new Array(n);
  let res: number = 0;

  for (let i: number = 0; i < n; i++) {
    let space: number = Math.round((n - i) / i);

    if (space === 0) {
      space = 1;
    }
    for (let j: number = i + space; j < n; j + space) {
      if (chairs[j + space]) {
        chairs[j] = i + 1;
        res = j;
      }
    }
  }
  console.log(chairs);
  return res;
}

console.log(lastChair(10)); // 9
