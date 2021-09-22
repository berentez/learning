// Create a function that takes three strings and returns a string. The first string(text)
// is a text that the function needs to change. Every occurrence of the second string(originalWord)
// should be changed to the third string(newWord) and the function should return the result.
// You cannot use any built-in replace function.

// Example cases:

// censor('I ate some apple', 'apple', 'banana');
// Should return 'I ate some banana'.

function censor(a, b, c) {
  const arr = a.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === b) {
      arr[i] = c;
    }
  }

  return arr.join(' ');
}

console.log(censor('I ate some apple', 'apple', 'banana'));
console.log(censor('', '', 'lol'));
console.log(censor('Hello Wolrd', '', 'lol'));
