export class Kata {
  static getCount(str: string) {
    const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
    const strArr: string[] = str.split('');
    let res: number = 0;

    strArr.forEach(value => {
      if (vowel.includes(value)) res++;
    });
    return res;
  }
}

console.log(Kata.getCount('abracadabra'));
