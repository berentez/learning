function sortVowels(s) {
  if (typeof s === 'string') {
    const vowels = 'aeiouAEIOU'.split('');
    const res = [];

    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        res.push(`|${s[i]}`);
      } else {
        res.push(`${s[i]}|`);
      }
      if (i + 1 !== s.length) {
        res.push('\n');
      }
    }

    return res.join('');
  }
  return '';
}

console.log(sortVowels('Codewars')); //'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels(undefined)); //''
console.log(sortVowels(1337)); //''
