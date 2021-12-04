const transferBinary = (binary: string): number => {
  let res: number = 0;
  let index = 0;

  for (let i: number = binary.length - 1; i >= 0; i--) {
    res += parseInt(binary[i]) * 2 ** index;
    index++;
  }

  return res;
};

export { transferBinary };
