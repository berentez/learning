//You aren't able to use any string/array/object methods, libs etc. You have to use only couple of math operators and conditionals. "+" and "-" operators also disabled.

const makePlural = (options, number) => {
  

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
