//You aren't able to use any string/array/object methods, libs etc. You have to use only couple of math operators and conditionals. "+" and "-" operators also disabled.

const makePlural = (options, number) => {
  const stringNum = number.toString();
  const ending = stringNum[stringNum.length - 1];

  if (ending === '1') {
    let singular = false;
    if (stringNum[stringNum.length - 2] !== '1') {
      console.log('singular', number);
      singular = true;
    }
    return singular ? options[0] : options[2];
  } else if (ending === '2' || ending === '3' || ending === '4') {
    if (number > 10 && number < 15) {
      return options[2];
    } else {
      return options[1];
    }
  } else {
    console.log('genitive plural', number);
    return options[2];
  }
};

const options = ['день', 'дня', 'дней'];

console.log(makePlural(options, 0)); //'дней'
console.log(makePlural(options, 1)); //день
console.log(makePlural(options, 2)); //дня
console.log(makePlural(options, 3)); //дня
console.log(makePlural(options, 4)); //дня
console.log(makePlural(options, 11));
console.log(makePlural(options, 111)); //'дней'
console.log(makePlural(options, 1111)); //'дней'
console.log(makePlural(options, 22)); //дня
