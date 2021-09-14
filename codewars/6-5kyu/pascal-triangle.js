function pascalsTriangle(n) {
  let previous = [];
  let current = [1];
  let res = [];

  for (let i = 0; i < n; i++) {
    res = res.concat(current);
    console.log('log: ', previous, current);
    for (let j = 0; j < previous.length; j++) {
      const value = previous[j] + previous[j + 1];
      current.push(value);
    }
    current.push(1);
    previous = [];
    previous = previous.concat(current);
  }

  current = [1];

  return res;
}

console.log(pascalsTriangle(1)); //1
console.log(pascalsTriangle(2)); //111
console.log(pascalsTriangle(3)); //111121
console.log(pascalsTriangle(4)); //1111211331
