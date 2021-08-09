// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {
  const digit = value.toString().length;
  const num = value.toString().split('');
  let result = 0;
  num.forEach(number => {
    result += Math.pow(parseInt(number), digit);
  });
  return result === value;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));
