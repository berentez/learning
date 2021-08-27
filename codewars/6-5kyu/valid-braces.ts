export function validBraces(braces: string): boolean {
  const braceArr: string[] = braces.split('');
  const charCode: number[] = braceArr.map(value => value.charCodeAt(0));
  const res: number[] = [];

  for (let i: number = 0; i < charCode.length; i++) {
    if (![41, 93, 125].includes(charCode[i])) {
      const value: number = checkPosition(charCode, i, i + 1);
      res.push(value);
      i += value;
    }
  }

  if (res.length === 0) {
    res.push(NaN);
  }

  return !res.includes(NaN);
}

function checkPosition(array: number[], i: number, j: number): number {
  if (array[i] - array[j] === -1 || array[i] - array[j] === -2) {
    if (j - i === 1) {
      return 1;
    }
    return 0;
  } else if (array[j] === undefined) {
    return NaN;
  } else {
    return checkPosition(array, i, j + 2);
  }
}

/////////test

console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('(}'));
console.log(validBraces('[(])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('}}]]))}])'));
