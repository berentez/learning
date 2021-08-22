interface ObjectClass {
  [key: string]: number;
}

export function isIsogram(str: string): boolean {
  const raw: string[] = str.toLowerCase().split('');
  const obj: ObjectClass = {};

  for (let i: number = 0; i < raw.length; i++) {
    if (Object.keys(obj).includes(raw[i])) {
      return false;
    } else {
      obj[raw[i]] = 1;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
