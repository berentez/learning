export const high = (str: string): string => {
  let res: any[] = ['', 0];
  const words: string[] = str.split(' ');

  for (let i: number = 0; i < words.length; i++) {
    let score: number = 0;
    for (let n: number = 0; n < words[i].length; n++) {
      score += words[i][n].charCodeAt(0) - 96;
    }
    console.log(words[i], score);

    if (score > res[1]) {
      res[0] = words[i];
      res[1] = score;
    }
    console.log(res);
  }
  return res[0];
};

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
