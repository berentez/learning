var fs = require('fs');

function censor(file, swearWords) {
  let words = '';
  try {
    words = fs.readFileSync(file, 'utf8');
  } catch {
    console.log('File not found');
  }

  let counter = 0;

  for (let i of swearWords) {
    const arr = words.toLocaleLowerCase().split(i);
    counter += arr.length - 1;
    words = arr.join(' ');
  }
  return counter;
}

const input = [
  'fuck',
  'bloody',
  'cock',
  'shit',
  'fucker',
  'fuckstick',
  'asshole',
  'dick',
  'piss',
  'cunt',
];

console.log(censor('read.txt', input));
