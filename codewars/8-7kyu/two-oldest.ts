export function twoOldestAges(ages: number[]): number[] {
  let num: number = 0;
  let result: number[] = [0, 0];
  ages.forEach((age) => {
    if (age > num) {
      num = age;
      result[1] = age;
    }
  });
  num = 0;
  ages.forEach((age) => {
    if (age > num && age < result[1]) {
      num = age;
      result[0] = age;
    }
  });

  return result;
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

//clever
// export function twoOldestAges(ages: number[]): number[] {
//   return ages.sort((a, b) => a - b).slice(ages.length - 2);
// }
