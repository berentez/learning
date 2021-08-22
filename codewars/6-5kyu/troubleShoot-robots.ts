interface LogCounter {
  [key: string]: number;
}

const isPrime = (num: number): boolean => {
  for (let i: number = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export function searchDisable(log: string): string {
  const logArray: string[] = log.split(' ');
  let counter: LogCounter = { integers: 0 };

  logArray.forEach(data => {
    if (isPrime(parseInt(data))) {
      const dataDigits: string[] = data.split('');
      if (
        dataDigits.length === 4 &&
        (dataDigits[2] === '2' || dataDigits[2] === '3')
      ) {
        counter.integers++;

        if (!Object.keys(counter).includes(data)) {
          counter[data] = 1;
        } else {
          counter[data]++;
        }
      }
    }
  });

  const integerValue: number[] = Object.values(counter);
  const notValid = integerValue.filter(num => num <= 4);

  for (let i: number = 0; i < notValid.length; i++) {
    counter.integers -= notValid[i];
  }

  if (counter.integers > 50) {
    return 'match disable bot';
  } else {
    return 'no match continue';
  }
}

//////////////////TEST//////////////////
const log1: string =
  '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031';
const log2: string =
  '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031';
const log3: string =
  '7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982';
let log4: string =
  '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923';
let log5: string =
  '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929';
console.log(searchDisable(log1));
console.log(searchDisable(log2));
console.log(searchDisable(log3));
console.log(searchDisable(log4));
console.log(searchDisable(log5));
