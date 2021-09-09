export function findUniq(arr: number[]): number {
  let obj: KeyInterface = {};
  for (let i: number = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let res: number = 0;

  arr.forEach(v => {
    if (obj[v] === 1) {
      res = v;
    }
  });
  return res;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

interface KeyInterface {
  [key: string]: number;
}
