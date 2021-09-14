function mostCommonWord(s: string[]): string {
  let obj: ObjInterface = {};
  let res: string = '';
  let counter: number = 0;

  for (let v of s) {
    if (obj[v] === undefined) {
      obj[v] = 1;
    } else {
      obj[v]++;
    }
  }

  for (let v of s) {
    if (obj[v] > counter) {
      counter = obj[v];
      res = v;
    }
  }

  return res;
}

interface ObjInterface {
  [key: string]: number;
}

console.log(mostCommonWord(['a', 'a', 'a', 'b', 'c', 'g', 'g', 'g']));
