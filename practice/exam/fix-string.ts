// 31. Fix String
// Create a function called fixString that

// takes a string as an input where all the vowels repeated a few times,
// returns a string where the duplicate vowels are removed,
// you are not allowed to use built-in functions like replace()
// Example cases:

// fixString("heellooo");
// Should return "hello"

// fixString("hiiiiiiii");
// Should return "hi"

// fixString("");
// Should return ""

function fixString(str: string): string {
  let arr: string[] = [];

  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  for (let i: number = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      arr.push(str[i]);
    } else if (str[i] !== str[i + 1]) {
      arr.push(str[i]);
    }
  }

  return arr.join('');
}

console.log(fixString('heellooo'));
console.log(fixString('hiiiiiiii'));
console.log(fixString(''));
