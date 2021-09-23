function wordReverse(str) {
  const splitStr = str.split(' ');
  const res = [];

  for (let i = 0; i < splitStr.length; i++) {
    const splitWord = splitStr[i].split('').reverse().join('');
    res.push(splitWord);
  }

  return res.join(' ');
}

console.log(wordReverse('lleW ,enod taht saw ton taht drah')); //"Well done, that was not that hard"
