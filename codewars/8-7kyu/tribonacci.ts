let array: number[] = [1, 1, 1];

function tribonacci(inputArray: number[], n: number): number[] {
  let resultArray: number[];

  if (n >= 3) {
    resultArray = inputArray;
    for (let i: number = 2; i < n - 1; i++) {
      let newNum: number = 0;
      newNum += resultArray[i - 2] + resultArray[i - 1] + resultArray[i];
      resultArray.push(newNum);
    }
  } else {
    resultArray = inputArray.splice(0, n);
  }
  return resultArray;
}

console.log(tribonacci(array, 10));
