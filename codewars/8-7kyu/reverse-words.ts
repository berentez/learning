export function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("yoda doesn't speak like this"));
