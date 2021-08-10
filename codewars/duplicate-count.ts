// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

export function duplicateCount(text: string): number {
  const textArray: string[] = text.toLowerCase().split('').sort();
  let res: number = 0;
  textArray.forEach((value, i) => {
    if (value === textArray[i + 1] && value !== textArray[i - 1]) {
      res++;
    }
  });

  return res;
}

console.log(duplicateCount('aaabbcd')); //=>2
console.log(duplicateCount('abcddcba')); //=>4
