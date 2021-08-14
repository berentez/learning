export function validBraces(braces: string): boolean {
  // let charCode = braces.split('').map((character) => {
  //   return character.charCodeAt(0);
  // });
  // charCode = charCode.sort((a, b) => a - b);
  // const dep: number[] = charCode;
  // let array: number[] = [];

  // for (let i: number = 0; i < charCode.length; i++) {
  //   for (let n: number = 1; n < charCode.length; n++) {
  //     console.log('i: ', charCode[i], 'n: ', charCode[n]);
  //     if (charCode[i] + 1 === charCode[n] || charCode[i] + 2 === charCode[n]) {
  //       array.push(charCode[i]);

  //       console.log('fut');
  //       break;
  //     }
  //   }
  const orderedBraces: string[] = braces.split('').sort();
  console.log(orderedBraces);
  const left: string[] = orderedBraces.slice(0, orderedBraces.length / 2);
  const right: string[] = orderedBraces.slice(orderedBraces.length / 2);
  console.log('left', left);
  console.log('right', right);
  return;
}

console.log(validBraces('()[]{()()}}}'));
console.log(validBraces('()'));

const string = '()[]{}';
