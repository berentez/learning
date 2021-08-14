function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  const strList = str.split('').splice;
  console.log(strList);
  strList.forEach((element) => {
    if (vowels.includes(element)) {
      counter++;
      console.log(counter);
    }
    return counter;
  });
}
console.log(getCount('abrakadabra'));
