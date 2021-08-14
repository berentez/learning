function arrayDiff(a, b) {
  let result = [];
  let index = 0;
  if (b.length === 0) {
    result = a;
  } else {
    a.forEach(value => {
      if (!b.includes(value)) {
        result.push(a[index]);
      }
      index++;
    });
  }

  return result;
}

const a = [1, 2, 3];
const b = [1, 2];
console.log(arrayDiff(a, b));
