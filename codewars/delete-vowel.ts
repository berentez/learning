function disemvowel(str: string) {
  let charArray = str.split('');
  return charArray
    .map(char => {
      if (/[aeiouAEIOU]/.test(char)) {
        char = '';
      } else {
        return char;
      }
    })
    .join('');
}

console.log(disemvowel('What a banana is going on here?'));

//best practice
function disemvowel2(str: string) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel2('What a banana is going on there?'));
