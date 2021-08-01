export function xo(str: string) {
  const x: string[] = str
    .toLowerCase()
    .split('')
    .filter(e => e === 'x');

  const o: string[] = str
    .toLowerCase()
    .split('')
    .filter(e => e === 'o');

  return o.length === x.length;
}

console.log(xo('xXxoOo'));
