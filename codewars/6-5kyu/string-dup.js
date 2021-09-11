function dup(s) {
  s.forEach((v, i) => {
    const word = v.split('');
    const newWord = word.filter((l, j) => {
      return word[j + 1] !== l;
    });

    s[i] = newWord.join('');
  });
  return s;
}

console.log(
  dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
);
