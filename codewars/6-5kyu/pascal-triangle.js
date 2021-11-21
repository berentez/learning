function pascalsTriangle(n) {
  let res = [1];

  if (n > 1) {
    let prevLine = [1];
    for (let i = 1; i < n; i++) {
      let currentLine = [1];
      for (let k = 0; k < prevLine.length; k++) {
        if (prevLine[k + 1] === undefined) {
          currentLine.push(1);
        } else {
          currentLine.push(prevLine[k] + prevLine[k + 1]);
        }
      }
      res = res.concat(currentLine);
      prevLine = currentLine;
    }
  }
  return res;
}

console.log(pascalsTriangle(1)); //1
console.log(pascalsTriangle(2)); //111
console.log(pascalsTriangle(3)); //111121
console.log(pascalsTriangle(4)); //1111211331
